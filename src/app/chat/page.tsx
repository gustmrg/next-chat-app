"use client";

import { useState } from "react";
import { users, messages as initialMessages } from "../mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(users[1]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const currentUserId = "1"; // Assuming the current user is Alice

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        id: String(messages.length + 1),
        senderId: currentUserId,
        receiverId: selectedUser.id,
        content: input.trim(),
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const filteredMessages = messages.filter(
    (m) =>
      (m.senderId === currentUserId && m.receiverId === selectedUser.id) ||
      (m.senderId === selectedUser.id && m.receiverId === currentUserId)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* User list */}
      <div className="w-1/5 bg-white border-r">
        <div>
          <h2 className="font-bold text-2xl ml-3 p-6">Chats</h2>
        </div>
        <ScrollArea className="h-full">
          {users
            .filter((u) => u.id !== currentUserId)
            .map((user) => (
              <div
                key={user.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedUser.id === user.id ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    {messages
                      .filter(
                        (m) =>
                          m.senderId === user.id || m.receiverId === user.id
                      )
                      .slice(-1)[0]
                      ?.content.substring(0, 20)}
                    ...
                  </p>
                </div>
              </div>
            ))}
        </ScrollArea>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-white p-4 border-b flex items-center">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
            <AvatarFallback>
              {selectedUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">{selectedUser.name}</h2>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${
                message.senderId === currentUserId
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-md p-3 rounded-lg ${
                  message.senderId === currentUserId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.content}
                <div className="text-xs mt-1 text-gray-400">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message input */}
        <form
          onSubmit={handleSendMessage}
          className="bg-white p-4 border-t flex"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow mr-2"
          />
          <Button type="submit" className="bg-blue-500">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
