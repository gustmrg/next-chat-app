"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
  LogLevel,
} from "@microsoft/signalr";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  senderId: string;
  messageId: string;
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    let userId = sessionStorage.getItem("userId");

    if (userId) {
      setUserId(userId);
    } else {
      userId = crypto.randomUUID();
      sessionStorage.setItem("userId", userId);
      setUserId(userId);
    }
  }, []);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl(`${process.env.NEXT_PUBLIC_SERVER_URL}/chat`, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    connect
      .start()
      .then(() => {
        console.log("Connected to SignalR!");
        connect.on("ReceiveMessage", (senderId, messageId, message) => {
          setMessages((prev) => [
            ...prev,
            { senderId: senderId, messageId: messageId, content: message },
          ]);
        });
      })
      .catch((err) =>
        console.error("Error while connecting to SignalR Hub:", err)
      );

    setConnection(connect);
  }, []);

  useEffect(() => {
    if (connection?.state === HubConnectionState.Connected) {
      connection.stop();
    }
  }, [connection]);

  const sendMessage = async () => {
    if (connection && newMessage.trim()) {
      await connection.send("SendMessage", userId, newMessage);
      setNewMessage("");
    }
  };

  const isMyMessage = (messageUserId: string) => {
    return userId === messageUserId;
  };

  const handleKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat window */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-white p-4 border-b flex items-center">
          <Link href="/" className="mr-4">
            <ChevronLeft />
          </Link>
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src="" alt="" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">User</h2>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <div
              key={message.messageId}
              className={`flex mb-4 ${
                isMyMessage(message.senderId) ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-md p-3 rounded-lg ${
                  isMyMessage(message.senderId)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message input */}
        <div
          onSubmit={() => {}}
          className="bg-white p-4 border-t flex"
          style={{ position: "sticky", bottom: 0 }}
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow mr-2"
            onKeyDown={handleKeyDownPress}
          />
          <Button className="bg-blue-500" onClick={sendMessage}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}
