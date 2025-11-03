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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Левая колонка - имя и статистика */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Николай Цалко
              </h2>
              <p className="text-lg md:text-xl text-[hsl(var(--cyan))]">
                AI Агентство РОСФОКУС
              </p>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - фото */}
          <div className="rounded-[24px] overflow-hidden border border-[hsl(var(--stroke))] shadow-[0_0_40px_hsl(var(--cyan)/0.15)]">
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
