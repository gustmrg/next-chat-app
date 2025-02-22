using Microsoft.AspNetCore.SignalR;

namespace Chat.Hubs;

public class ChatHub : Hub
{
    public async Task SendMessage(string userId, string message)
    {
        var messageId = Guid.NewGuid().ToString();
        await Clients.All.SendAsync("ReceiveMessage", userId, messageId, message);
    }
}