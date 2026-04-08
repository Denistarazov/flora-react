const VALUES = [
  { icon: '🌱', title: 'Свежесть',   desc: 'Поставки 5 раз в неделю напрямую с ферм' },
  { icon: '✂️', title: 'Мастерство', desc: 'Флористы с европейским образованием' },
  { icon: '💚', title: 'Экология',   desc: 'Биоразлагаемая упаковка, без пластика' },
  { icon: '⭐', title: 'Гарантия',   desc: 'Замена, если букет не понравится' },
];

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">

        <div className="section__header">
          <span className="section__label">Наша история</span>
          <h2 className="section__title" id="about-title">Любовь к цветам с 2014 года</h2>
          <div className="divider" aria-hidden="true" />
        </div>

        <div className="about__grid">
          <div className="about__visual">
            <div className="about__image-frame">
              <div className="about__image-card" role="img" aria-label="Флористический салон Флория">
                🌺
              </div>
              <div className="about__badge-float" aria-label="10 лет на рынке">
                <div className="about__badge-float-value">10+</div>
                <div className="about__badge-float-label">лет работы</div>
              </div>
            </div>
          </div>

          <div className="about__content">
            <div className="about__text">
              <p>
                «Флория» — семейный цветочный магазин в самом сердце города.
                Мы начинали как небольшая мастерская с одним флористом и горой идей,
                а сегодня наша команда из 12 специалистов создаёт сотни букетов в месяц —
                от нежных повседневных до грандиозных свадебных оформлений.
              </p>
              <p>
                Мы сотрудничаем напрямую с голландскими и отечественными питомниками,
                поэтому каждый цветок в нашем магазине — это гарантия свежести и
                конкурентная цена без посредников.
              </p>
              <p>
                Каждый букет мы собираем вручную, вкладывая в него историю и настроение,
                которые вы хотите передать своим близким.
              </p>
            </div>

            <div className="about__values" role="list" aria-label="Наши ценности">
              {VALUES.map(({ icon, title, desc }) => (
                <div className="value-card" role="listitem" key={title}>
                  <div className="value-card__icon" aria-hidden="true">{icon}</div>
                  <div className="value-card__title">{title}</div>
                  <div className="value-card__desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
