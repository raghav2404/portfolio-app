using Microsoft.AspNetCore.Mvc;
using PortfolioApp.Models;
using PortfolioApp.Services;

namespace PortfolioApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IContactService contactService, ILogger<ContactController> logger)
        {
            _contactService = contactService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<ContactMessage>> CreateContactMessage([FromBody] ContactMessageDto contactDto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new { success = false, message = "Invalid form data", errors = ModelState });
                }

                var contactMessage = await _contactService.CreateContactMessageAsync(contactDto);
                
                _logger.LogInformation("Contact message created with ID: {Id}", contactMessage.Id);
                
                return CreatedAtAction(
                    nameof(GetContactMessage),
                    new { id = contactMessage.Id },
                    new { success = true, message = "Message sent successfully!", id = contactMessage.Id }
                );
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating contact message");
                return StatusCode(500, new { success = false, message = "Failed to send message. Please try again." });
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetAllContactMessages()
        {
            try
            {
                var messages = await _contactService.GetAllContactMessagesAsync();
                return Ok(messages);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching contact messages");
                return StatusCode(500, new { success = false, message = "Failed to fetch messages" });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ContactMessage>> GetContactMessage(int id)
        {
            try
            {
                var message = await _contactService.GetContactMessageByIdAsync(id);
                
                if (message == null)
                {
                    return NotFound(new { success = false, message = "Message not found" });
                }

                return Ok(message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching contact message with ID: {Id}", id);
                return StatusCode(500, new { success = false, message = "Failed to fetch message" });
            }
        }
    }
}