import authorPhoto from "@/assets/author-photo.jpeg";

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

            <div className="space-y-10">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-5xl md:text-6xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-muted max-w-md">
                    {stat.label}
                  </div>
                </div>
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
