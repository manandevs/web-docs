const Logo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Red glow background */}
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[80px] h-[60px] opacity-80 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-transparent blur-[80px] rounded-full mix-blend-screen" />
      </div>

      {/* Logo content */}
      <div className="relative z-10 flex items-center">
        <span className="text-3xl flex items-center">🤖</span>
        <span className="ml-1 text-4xl text-white font-it-weralionis">
          WebDocs
        </span>
      </div>
    </div>
  );
};

export default Logo;
