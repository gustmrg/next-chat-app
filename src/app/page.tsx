"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit, MessageCircle, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 flex flex-row items-center justify-between">
        <div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="" alt="" />
            <AvatarFallback>GM</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-semibold text-center">Chats</h2>
        <Edit className="w-6 h-6 cursor-pointer" />
      </header>
      <main className="flex flex-1 overflow-hidden">
        <ScrollArea className="flex-1">
          <Link href="/chat">
            <div
              className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
            >
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="" alt="" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">Gustavo Miranda</p>
                  <time className="self-end ml-auto text-sm">9:30 AM</time>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm text-gray-500 flex-1">
                    Do you want to have a dinner with...
                  </p>
                  <Badge variant="primary" className="ml-auto">
                    4
                  </Badge>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/chat">
            <div
              className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
            >
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="" alt="" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">Gustavo Miranda</p>
                  <time className="self-end ml-auto text-sm">9:30 AM</time>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm text-gray-500 flex-1">
                    Do you want to have a dinner with...
                  </p>
                  <Badge variant="primary" className="ml-auto">
                    1
                  </Badge>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/chat">
            <div
              className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
            >
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="" alt="" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">Gustavo Miranda</p>
                  <time className="self-end ml-auto text-sm">9:30 AM</time>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm text-gray-500 flex-1">
                    Do you want to have a dinner with...
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/chat">
            <div
              className="flex items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {}}
            >
              <Avatar className="w-10 h-10 mr-3">
                <AvatarImage src="" alt="" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="font-semibold">Gustavo Miranda</p>
                  <time className="self-end ml-auto text-sm">9:30 AM</time>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm text-gray-500 flex-1">
                    Do you want to have a dinner with...
                  </p>
                  <Badge variant="primary" className="ml-auto">
                    10
                  </Badge>
                </div>
              </div>
            </div>
          </Link>
        </ScrollArea>
      </main>
      <div
        className="bg-blue-500 p-4 border-t flex justify-between w-full"
        style={{ position: "fixed", bottom: 0 }}
      >
        <Button size="lg" className="bg-transparent flex flex-col mx-2">
          <MessageCircle
            fill="white"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
          <span className="font-semibold text-xs">Chats</span>
        </Button>
        <Button size="lg" className="bg-transparent flex flex-col mx-2">
          <Users style={{ height: "1.5rem", width: "1.5rem" }} />
          <span className="font-semibold text-xs">Contacts</span>
        </Button>
        <Button size="lg" className="bg-transparent flex flex-col mx-2">
          <Settings style={{ height: "1.5rem", width: "1.5rem" }} />
          <span className="font-semibold text-xs">Settings</span>
        </Button>
      </div>
    </div>
  );
}
