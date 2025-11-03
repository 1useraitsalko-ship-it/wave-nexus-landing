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
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Научись создавать{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                вирусные ролики
              </span>
              <br />
              за{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                5 минут
              </span>
              <br />с помощью{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                AI
              </span>
            </h1>

            <PrimaryButton href="https://aitsalko.ru/2waves" className="text-lg h-16 px-9">
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
