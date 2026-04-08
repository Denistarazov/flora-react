const DETAILS = [
  { icon: '📍', label: 'Адрес',         value: 'ул. Цветочная, 12, Москва', href: null },
  { icon: '📞', label: 'Телефон',       value: '+7 (495) 123-45-67',        href: 'tel:+74951234567' },
  { icon: '✉️', label: 'Email',         value: 'hello@floriya.ru',           href: 'mailto:hello@floriya.ru' },
  { icon: '🕐', label: 'Режим работы',  value: 'Ежедневно с 8:00 до 22:00', href: null },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">

        <div className="section__header">
          <span className="section__label">Связаться с нами</span>
          <h2 className="section__title" id="contact-title">Давайте создадим что-то красивое</h2>
          <div className="divider" aria-hidden="true" />
        </div>

        <div className="contact__grid">

          {/* Info column */}
          <div className="contact__info">
            <h3 className="contact__info-title">Мы рядом</h3>
            <p className="contact__info-text">
              Приходите в наш салон или оставьте заявку онлайн — мы перезвоним
              в течение 15 минут и поможем выбрать идеальный букет.
            </p>

            <address className="contact__details" style={{ fontStyle: 'normal' }}>
              {DETAILS.map(({ icon, label, value, href }) => (
                <div className="contact-detail" key={label}>
                  <div className="contact-detail__icon" aria-hidden="true">{icon}</div>
                  <div>
                    <div className="contact-detail__label">{label}</div>
                    <div className="contact-detail__value">
                      {href
                        ? <a href={href} aria-label={`${label}: ${value}`}>{value}</a>
                        : value
                      }
                    </div>
                  </div>
                </div>
              ))}
            </address>

            <nav className="contact__socials" aria-label="Мы в социальных сетях">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"
                aria-label="Наш ВКонтакте (открывается в новой вкладке)">
                <VkIcon />
                ВКонтакте
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"
                aria-label="Наш Telegram (открывается в новой вкладке)">
                <TgIcon />
                Telegram
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"
                aria-label="Мы в WhatsApp (открывается в новой вкладке)">
                <WaIcon />
                WhatsApp
              </a>
            </nav>
          </div>

          {/* CTA card */}
          <div className="contact__cta-card">
            <div className="contact__cta-emoji" aria-hidden="true">💐</div>
            <h3 className="contact__cta-title">Особый повод?</h3>
            <p className="contact__cta-text">
              Свадьба, корпоратив, юбилей? Расскажите нам о вашем событии —
              мы разработаем уникальную концепцию и подберём цветы,
              которые сделают его незабываемым.
            </p>
            <div className="contact__cta-actions">
              <a href="tel:+74951234567" className="btn btn--primary btn--full"
                aria-label="Позвонить и обсудить особый заказ">
                <PhoneIcon />
                Позвонить нам
              </a>
              <a href="mailto:hello@floriya.ru" className="btn btn--outline btn--full"
                aria-label="Написать нам на email">
                Написать письмо
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function VkIcon() {
  return (
    <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.253-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z"/>
    </svg>
  );
}

function TgIcon() {
  return (
    <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function WaIcon() {
  return (
    <svg className="social-link__icon" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
