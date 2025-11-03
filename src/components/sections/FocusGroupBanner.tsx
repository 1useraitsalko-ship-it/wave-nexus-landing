import GlassCard from "../GlassCard";
import Badge from "../Badge";

const FocusGroupBanner = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <GlassCard glow className="p-8 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="text-blue">Набор в фокус-группу</span> для создания виральных видео
            </h2>
            
            <p className="text-xl text-muted">
              Настрой алгоритмы соцсети, научись создавать виральные Reels, получай новых подписчиков и клиентов
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge>✅ Доступ к подробным урокам</Badge>
              <Badge>💬 Закрытый чат с моей командой</Badge>
              <Badge>🎯 Персональная поддержка</Badge>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default FocusGroupBanner;
