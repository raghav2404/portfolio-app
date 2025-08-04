using Microsoft.EntityFrameworkCore;
using PortfolioApp.Data;
using PortfolioApp.Models;

namespace PortfolioApp.Services
{
    public class ContactService : IContactService
    {
        private readonly PortfolioDbContext _context;

        public ContactService(PortfolioDbContext context)
        {
            _context = context;
        }

        public async Task<ContactMessage> CreateContactMessageAsync(ContactMessageDto contactDto)
        {
            var contactMessage = new ContactMessage
            {
                Name = contactDto.Name,
                Email = contactDto.Email,
                Subject = contactDto.Subject,
                Message = contactDto.Message,
                CreatedAt = DateTime.UtcNow
            };

            _context.ContactMessages.Add(contactMessage);
            await _context.SaveChangesAsync();

            return contactMessage;
        }

        public async Task<IEnumerable<ContactMessage>> GetAllContactMessagesAsync()
        {
            return await _context.ContactMessages
                .OrderByDescending(c => c.CreatedAt)
                .ToListAsync();
        }

        public async Task<ContactMessage?> GetContactMessageByIdAsync(int id)
        {
            return await _context.ContactMessages
                .FirstOrDefaultAsync(c => c.Id == id);
        }
    }
}