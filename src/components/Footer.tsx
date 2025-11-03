const Footer = () => {
  return (
    <footer className="border-t border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Юридическая информация */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Юридическая информация</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>ИП Салько Александр Игоревич</p>
              <p>ИНН: 246322563532</p>
              <p>ОГРНИП: 323246800062845</p>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>Телефон: +7 (XXX) XXX-XX-XX</p>
              <p>Email: info@rosfocus.ru</p>
            </div>
          </div>

          {/* Документы */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Документы</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block px-4 py-2 text-sm rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] text-foreground hover:border-cyan/50 transition-colors"
              >
                Публичная оферта
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 text-sm rounded-lg border border-[hsl(var(--stroke))] bg-[hsl(var(--bg-card))] text-foreground hover:border-cyan/50 transition-colors"
              >
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
