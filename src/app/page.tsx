"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";

export default function Home() {
  return (
    <div>
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
      <div>
        <div>
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
                  Do you want to...
                </p>
                <Badge className="ml-auto">4</Badge>
              </div>
            </div>
          </div>

          <div>
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
                    Do you want to...
                  </p>
                  <Badge className="ml-auto">1</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
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
                    Do you want to...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
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
                    Do you want to...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
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
                    Do you want to...
                  </p>
                  <Badge className="ml-auto">10</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
