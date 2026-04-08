import { useCallback } from 'react';

export default function Hero() {
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="hero section" id="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__inner">

          <div className="hero__content">
            <div className="hero__badge" role="status" aria-label="Статус: доставка в день заказа">
              <span className="hero__badge-dot" aria-hidden="true" />
              Доставка в день заказа
            </div>

            <h1 className="hero__title" id="hero-title">
              Живые цветы<br />
              с <span className="hero__title-accent">душой</span>
            </h1>

            <p className="hero__tagline">
              Авторские букеты и цветочные композиции для любого повода.
              Свежие цветы каждый день, бесплатная доставка по городу
              при заказе от&nbsp;2&nbsp;500&nbsp;₽.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary"
                onClick={() => scrollTo('catalog')}
                aria-label="Перейти к каталогу букетов"
              >
                <ArrowIcon />
                Выбрать букет
              </button>
              <button
                className="btn btn--outline"
                onClick={() => scrollTo('contact')}
              >
                Индивидуальный заказ
              </button>
            </div>

            <div className="hero__features" aria-label="Преимущества">
              {FEATURES.map(({ icon, label }) => (
                <div className="hero__feature" key={label}>
                  <div className="hero__feature-icon" aria-hidden="true">{icon}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__bouquet-wrap">
              <div className="hero__bouquet-bg" />
              <div className="hero__bouquet-emoji">💐</div>
              <span className="hero__bouquet-decor hero__bouquet-decor--1">🌸</span>
              <span className="hero__bouquet-decor hero__bouquet-decor--2">🌷</span>
              <span className="hero__bouquet-decor hero__bouquet-decor--3">🌿</span>
              <span className="hero__bouquet-decor hero__bouquet-decor--4">✿</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: '🚚', label: 'Доставка 2 часа'    },
  { icon: '🌿', label: 'Свежие каждый день' },
  { icon: '🎁', label: 'Упаковка в подарок' },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
