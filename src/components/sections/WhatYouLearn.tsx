import GlassCard from "../GlassCard";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";
import video4 from "@/assets/video-4.mp4";
import video5 from "@/assets/video-5.mp4";

const learnings = [
  {
    emoji: "✨",
    title: "Создавать контент, который выделяется из толпы",
    video: video1,
  },
  {
    emoji: "🔥",
    title: "Прокачивать алгоритмы аккаунтов для вирального контента",
    video: video2,
  },
  {
    emoji: "🚀",
    title: "Быстро набирать подписчиков",
    video: video3,
  },
  {
    emoji: "💰",
    title: "Переливать трафик в Telegram",
    video: video4,
  },
  {
    emoji: "🐝",
    title: "Монетизировать контент",
    video: video5,
  },
];

const WhatYouLearn = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-text bg-clip-text text-transparent">
            Что вы научитесь делать
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {learnings.map((item, index) => (
            <GlassCard 
              key={index}
              className="group p-6 md:p-8 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.3)] transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/10 to-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="flex items-start justify-between gap-6 relative z-10">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center text-2xl">
                    {item.emoji}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground pt-2">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex-shrink-0 w-32 h-56 md:w-40 md:h-72 rounded-2xl overflow-hidden bg-muted/30">
                  <video 
                    src={item.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
