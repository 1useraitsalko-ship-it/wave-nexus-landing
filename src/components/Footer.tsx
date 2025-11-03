import { FileText, Shield, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Юридическая информация */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Юридическая информация</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>ИП Шагалина К.Э.</p>
              <p>ИНН: <span className="text-cyan">501604427070</span></p>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan" />
                <span>+7 (963) 522-17-60</span>
              </div>
            </div>
          </div>

          {/* Документы */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Документы</h3>
            <div className="space-y-3">
              <a 
                href="https://aitsalko.ru/page1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] text-foreground hover:border-cyan/50 hover:bg-[hsl(var(--bg-card))]/80 transition-all"
              >
                <FileText className="w-4 h-4" />
                Публичная оферта
              </a>
              <a 
                href="https://aitsalko.ru/page0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] text-foreground hover:border-cyan/50 hover:bg-[hsl(var(--bg-card))]/80 transition-all"
              >
                <Shield className="w-4 h-4" />
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="pt-8 border-t border-[hsl(var(--stroke))] text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} РОСФОКУС. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
