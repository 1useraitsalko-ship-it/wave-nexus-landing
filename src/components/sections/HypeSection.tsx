const HypeSection = () => {
  return (
    <section className="relative py-24 bg-gradient-wave">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Помните хайп с Veo3 от Google?
          <br />
          Кто-то зарабатывает миллионы, создавая вирусный контент,
          <br />а кто-то только смотрит…
        </h2>

        <div className="inline-block">
          <div className="px-8 py-4 rounded-full border-2 border-muted/30 bg-transparent text-muted text-lg font-medium">
            Кто успел, тот и заработал!
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-text bg-clip-text text-transparent animate-glow">
            СЕЙЧАС ВТОРАЯ ВОЛНА
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HypeSection;
