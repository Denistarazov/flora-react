const SERVICES = [
  {
    icon:  '💍',
    green: false,
    title: 'Свадебное оформление',
    desc:  'Арки, столы, букет невесты, бутоньерки — от концепции до последнего лепестка',
  },
  {
    icon:  '🎉',
    green: true,
    title: 'Оформление мероприятий',
    desc:  'Корпоративы, дни рождения, выставки — флористический декор любого масштаба',
  },
  {
    icon:  '📦',
    green: false,
    title: 'Подарочные корзины',
    desc:  'Цветы + сладкое, фрукты или шампанское — готовые наборы и сборка на заказ',
  },
  {
    icon:  '🏢',
    green: true,
    title: 'Абонемент для офиса',
    desc:  'Еженедельная замена цветов в вашем офисе — свежесть и красота без хлопот',
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="container">

        <div className="section__header" style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="section__label">Что мы делаем</span>
          <h2 className="section__title" id="services-title">Наши услуги</h2>
          <div className="divider" aria-hidden="true" />
        </div>

        <ul className="services__grid" role="list" aria-label="Список услуг">
          {SERVICES.map(({ icon, green, title, desc }) => (
            <li className="service-item" role="listitem" key={title}>
              <div className={`service-item__icon${green ? ' service-item__icon--green' : ''}`} aria-hidden="true">
                {icon}
              </div>
              <div>
                <div className="service-item__title">{title}</div>
                <div className="service-item__desc">{desc}</div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
