import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  Menu,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Search,
  Settings,
  SunMedium,
  Terminal,
  Trash,
  Twitter,
  User,
  X,
} from "lucide-react";
import { type LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  // Brand / Custom Icons
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  gitHub: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  googleSheets: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 87.3 122.8" {...props}>
      <path
        d="M83.4 20.3L64.8 1.7C63.7.6 62.2 0 60.7 0H10C4.5 0 0 4.5 0 10v102.8c0 5.5 4.5 10 10 10h67.3c5.5 0 10-4.5 10-10V24.3c0-1.5-.6-3-1.9-4z"
        fill="#0F9D58"
      />
      <path d="M87.3 24.3H63V0l24.3 24.3z" fill="#006634" />
      <path fill="#FFF" d="M16 28h55.3v66.8H16z" />
      <path fill="#0F9D58" d="M25 40h9v9h-9zm14 0h9v9h-9zm14 0h9v9h-9zm14 0h9v9h-9z" />
      <path fill="#006634" d="M25 58h9v9h-9zm14 0h9v9h-9zm14 0h9v9h-9zm14 0h9v9h-9z" />
    </svg>
  ),
  // UI Icons
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  search: Search,
  menu: Menu,
  terminal: Terminal,
  copy: Copy,
  check: Check,
  warning: AlertTriangle,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  settings: Settings,
  laptop: Laptop,
  user: User,
  add: Plus,
  media: Image,
  trash: Trash,
  ellipsis: MoreVertical,
  page: FileText,
  billing: CreditCard,
  file: File,
  cmd: Command,
};