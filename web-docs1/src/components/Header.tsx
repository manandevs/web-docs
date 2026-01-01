import { PenLine } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md py-2">
      <div className="flex h-16 items-center justify-between px-6 max-w-[1400px] mx-auto">
        <Logo />

        <Button className="flex items-center rounded-md bg-white py-3 px-5 text-md font-medium text-black hover:bg-gray-200 transition-colors font-it-weralionis tracking-wide">
          <PenLine />
          Learn
        </Button>
      </div>
    </header>
  );
};

export default Header;
