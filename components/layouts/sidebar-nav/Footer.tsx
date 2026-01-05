"use client";

import React from 'react';
import Link from 'next/link';
import {
  Settings,
  LogOut,
  User,
  Sparkles,
  ChevronsUpDown,
  UserCircle
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"

const SidebarNavFooter = () => {
  return (
    <div className="flex flex-col gap-3 px-2 py-3 mt-auto bg-black/50 backdrop-blur-sm">
      {/* <Link
        href="/feedback"
        className="group relative flex items-center justify-between px-3 py-2.5 rounded-xl bg-linear-to-r from-zinc-900 to-zinc-900/50 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center gap-2.5 z-10">
          <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
            <HelpCircle size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-zinc-200">Need Help?</span>
            <span className="text-[10px] text-zinc-500">Contact support</span>
          </div>
        </div>
      </Link> */}

      <div className="pt-2 border-t border-white/5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-white/5 data-[state=open]:bg-white/10 transition-colors group text-left outline-none">

              {/* Wrapper div to position status dot correctly */}
              <div className="relative">
                <Avatar className="h-9 w-9 rounded-lg border border-white/10">
                  {/* <AvatarImage src="/images/avatar.png" alt="User" /> */}
                  <AvatarFallback className="rounded-lg bg-zinc-800 text-zinc-400">
                    <UserCircle size={20} />
                  </AvatarFallback>
                </Avatar>
                {/* Status dot moved outside Avatar to prevent clipping */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
              </div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <span className="text-sm font-medium text-zinc-200 truncate font-it-weralionis tracking-wide">
                  John Doe
                </span>
                <span className="text-[11px] text-zinc-500 truncate group-hover:text-zinc-400">
                  john@example.com
                </span>
              </div>
              <ChevronsUpDown size={14} className="text-zinc-600 group-hover:text-zinc-400" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56 bg-[#0A0A0A] border-white/10 text-zinc-400 rounded-2xl"
            side="top"
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-zinc-200">John Doe</p>
                <p className="text-xs leading-none text-zinc-500">john@example.com</p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="bg-white/10" />

            <DropdownMenuGroup>
              <DropdownMenuItem className="focus:bg-white/10 cursor-pointer text-amber-500 focus:text-amber-400">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-white/10" />

            <DropdownMenuGroup>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-zinc-200 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-zinc-200 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator className="bg-white/10" />

            <DropdownMenuItem className="text-red-400 focus:text-red-400 focus:bg-red-500/10 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

// Helper Component for Social Icons
const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <Link
    href={href}
    target="_blank"
    className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group"
  >
    <div className="text-zinc-500 group-hover:text-zinc-200 transition-colors">
      {icon}
    </div>
    <span className="text-[10px] font-medium text-zinc-500 group-hover:text-zinc-400">
      {label}
    </span>
  </Link>
)

export default SidebarNavFooter