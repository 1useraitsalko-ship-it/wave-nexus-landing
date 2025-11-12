import Badge from "../Badge";
import PrimaryButton from "../PrimaryButton";
import GlassCard from "../GlassCard";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-wave py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка */}
          <div className="space-y-8 animate-slide-up">
            <Badge>ВТОРАЯ ВОЛНА НЕЙРОКОНТЕНТА</Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-foreground">
              Научись создавать{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                вирусные ролики
              </span>
              {" "}за{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                5 минут
              </span>
              {" "}с помощью{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <PrimaryButton
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("modules");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="text-lg h-16 px-9"
            >
              🌊 Поймать волну возможностей
            </PrimaryButton>
          </div>

          {/* Правая колонка */}
          <div className="animate-fade-in">
            <GlassCard glow className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue/20 to-violet/20">
                <video 
                  src={heroVideo} 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  onLoadedMetadata={(e) => {
                    const video = e.currentTarget;
                    video.play().catch(() => {
                      // Автовоспроизведение заблокировано браузером
                    });
                  }}
                />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
