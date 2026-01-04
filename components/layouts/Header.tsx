import { PenLine } from "lucide-react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md py-2 border-b border-gray-800">
      <div className="flex h-16 items-center justify-between px-3 w-full mx-auto">
        <Logo />
        <div className="flex justify-center items-center gap-3">
          <Button className="h-7 w-5 flex items-center rounded-full bg-white text-md font-medium text-black hover:bg-gray-200 transition-colors font-it-weralionis tracking-wide">
            <SidebarTrigger />
          </Button>

          <Button className="flex items-center rounded-md bg-white py-3 px-5 text-md font-medium text-black hover:bg-gray-200 transition-colors font-it-weralionis tracking-wide">
            <PenLine className="mr-2" />
            Learn
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
