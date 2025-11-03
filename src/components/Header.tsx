import rosfocusLogo from "@/assets/rosfocus-logo.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/80 backdrop-blur-lg">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <img src={rosfocusLogo} alt="РОСФОКУС" className="h-12" />
        <PrimaryButton href="https://aitsalko.ru/2waves">
          ВСТУПИТЬ В ФОКУС ГРУППУ
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
