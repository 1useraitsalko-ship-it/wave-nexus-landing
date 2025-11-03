const HypeSection = () => {
  return (
    <section className="relative py-24 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Помните Хайп с Veo3 когда бабушки с бегемотами заполонили интернет?
        </h2>

        <div className="inline-block animate-pulse scale-150 md:scale-[2]">
          <div className="px-12 py-6 rounded-full border-4 border-cyan bg-gradient-to-br from-cyan/30 to-cyan/10 shadow-[0_0_60px_hsl(var(--cyan)/0.6)] text-cyan text-2xl md:text-3xl font-bold animate-glow">
            Кто успел — тот заработал!
          </div>
        </div>

        <div className="pt-12">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan via-blue-400 to-green-400 bg-clip-text text-transparent animate-[glow_3s_ease-in-out_infinite]">
            СЕЙЧАС ВТОРАЯ ВОЛНА
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HypeSection;
