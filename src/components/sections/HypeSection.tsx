const HypeSection = () => {
  return (
    <section className="relative py-24 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Помните Хайп с Veo3 когда бабушки с бегемотами заполонили интернет?
        </h2>

        <div className="flex justify-center scale-[1.8] md:scale-[2.5]">
          <div className="px-12 py-6 rounded-full border-4 border-cyan bg-gradient-to-br from-cyan/30 to-cyan/10 shadow-[0_0_60px_hsl(var(--cyan)/0.6)] text-cyan text-2xl md:text-4xl font-bold animate-breathing">
            Кто успел, тот и заработал!
          </div>
        </div>

        <div className="pt-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-cyan via-teal-400 to-blue-500 bg-clip-text text-transparent animate-gradient-wave">
            СЕЙЧАС ВТОРАЯ ВОЛНА
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HypeSection;
