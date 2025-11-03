import rosfocusLogo from "@/assets/rosfocus-logo.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/80 backdrop-blur-lg">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={rosfocusLogo} alt="РОСФОКУС" className="h-12" />
          <span className="text-xl font-bold text-[hsl(var(--txt))]">РОСФОКУС</span>
        </div>
        <PrimaryButton href="https://aitsalko.ru/2waves">
          ВСТУПИТЬ В ФОКУС ГРУППУ
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
