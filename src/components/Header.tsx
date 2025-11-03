import rosfocusLogo from "@/assets/rosfocus-logo.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/80 backdrop-blur-lg">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={rosfocusLogo} alt="РОСФОКУС" className="h-8 md:h-12" />
          <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#6AA7FF] via-[#18D1E9] to-[#8B5CF6] bg-clip-text text-transparent animate-gradient-wave bg-[length:200%_auto]">РОСФОКУС</span>
        </div>
        <PrimaryButton href="https://aitsalko.ru/2waves" className="text-xs md:text-sm whitespace-nowrap h-10 md:h-14 px-3 md:px-7">
          <span className="hidden md:inline">ВСТУПИТЬ В ФОКУС ГРУППУ</span>
          <span className="md:hidden">ФОКУС-ГРУППА</span>
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
