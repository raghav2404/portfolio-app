using PortfolioApp.Models;

namespace PortfolioApp.Services
{
    public interface IContactService
    {
        Task<ContactMessage> CreateContactMessageAsync(ContactMessageDto contactDto);
        Task<IEnumerable<ContactMessage>> GetAllContactMessagesAsync();
        Task<ContactMessage?> GetContactMessageByIdAsync(int id);
    }
}