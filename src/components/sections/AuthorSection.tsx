import authorPhoto from "@/assets/author-photo.jpeg";
import GlassCard from "../GlassCard";

const stats = [
  { value: "1000+", label: "коммерческих видео реализовано" },
  { value: "5 лет", label: "в видеопроизводстве" },
  { value: "6 лет", label: "в продвижении брендов" },
  { value: "800+", label: "учеников офлайн и онлайн в школе \"Деньги на нейросетях\"" },
];

const AuthorSection = () => {
  return (
    <section className="py-20 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Левая колонка - имя и статистика */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Николай Цалко
              </h2>
              <p className="text-lg md:text-xl text-[hsl(var(--cyan))]">
                AI Агентство РОСФОКУС
              </p>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <GlassCard 
                  key={index} 
                  className="p-6 relative overflow-hidden group hover:shadow-[0_0_50px_hsl(var(--cyan)/0.25)] transition-all duration-300"
                >
                  {/* Волновой фоновый эффект */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--cyan))] via-transparent to-[hsl(var(--blue))]" />
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,40 50,50 T100,50 L100,100 L0,100 Z" fill="hsl(var(--cyan)/0.1)" />
                        <path d="M0,60 Q25,50 50,60 T100,60 L100,100 L0,100 Z" fill="hsl(var(--blue)/0.1)" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative z-10 space-y-2">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-base md:text-lg text-muted max-w-md">
                      {stat.label}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Правая колонка - фото */}
          <div className="rounded-[32px] overflow-hidden border-2 border-[hsl(var(--cyan)/0.3)] shadow-[0_0_60px_hsl(var(--cyan)/0.2)] w-full lg:w-[420px] xl:w-[480px]">
            <img
              src={authorPhoto}
              alt="Николай Цалко"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
