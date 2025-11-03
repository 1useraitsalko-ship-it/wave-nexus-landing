import PrimaryButton from "../PrimaryButton";

const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-wave overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Не упустите{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              вторую волну
            </span>
            <br />
            нейроконтента
          </h2>

          <PrimaryButton 
            href="https://aitsalko.ru/2waves"
            className="text-xl h-20 px-12 text-2xl"
          >
            🚀 ВСТУПИТЬ
          </PrimaryButton>

          <p className="text-lg text-muted">
            <span className="text-foreground font-semibold">Мы уже работаем в фокус-группе, а ты?</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
