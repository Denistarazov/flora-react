import { useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    id:      1,
    emoji:   '🌹',
    theme:   'rose',
    badge:   { label: 'ХИТ', mod: 'hit' },
    title:   '«Роскошный закат»',
    desc:    '25 пионовидных роз сортов Ohara и Juliet в тёплых персиково-коралловых тонах. Дополнен зеленью эвкалипта и хлопком — идеален для признания в любви или юбилея.',
    tags:    [
      { label: 'Роза Juliet',  green: false },
      { label: 'Роза Ohara',   green: false },
      { label: 'Эвкалипт',     green: true  },
      { label: 'Хлопок',       green: true  },
    ],
    price:   '4 900 ₽',
    stems:   '25 стеблей',
  },
  {
    id:      2,
    emoji:   '🌼',
    theme:   'mix',
    badge:   { label: 'НОВИНКА', mod: 'new' },
    title:   '«Весенний акварель»',
    desc:    'Лёгкий смешанный букет из ранункулюсов, анемонов и фрезий пастельных оттенков. Воздушная композиция подходит для поздравления, дня рождения или просто доброго утра.',
    tags:    [
      { label: 'Ранункулюс', green: false },
      { label: 'Анемон',     green: false },
      { label: 'Фрезия',     green: false },
      { label: 'Гипсофила',  green: true  },
    ],
    price:   '3 200 ₽',
    stems:   '~30 стеблей',
  },
  {
    id:      3,
    emoji:   '🌿',
    theme:   'green',
    badge:   { label: 'ЭКО', mod: 'eco' },
    title:   '«Лесная сказка»',
    desc:    'Монобукет из белых пионов и кремовых роз с акцентом из папоротника, мха и веток питтоспорума. Природная эстетика для тех, кто ценит спокойную красоту.',
    tags:    [
      { label: 'Пион белый',    green: false },
      { label: 'Роза кремовая', green: false },
      { label: 'Папоротник',    green: true  },
      { label: 'Питтоспорум',   green: true  },
    ],
    price:   '3 800 ₽',
    stems:   '15 стеблей',
  },
];

export default function Catalog() {
  return (
    <section className="catalog section" id="catalog" aria-labelledby="catalog-title">
      <div className="container">

        <div className="section__header">
          <span className="section__label">Каталог</span>
          <h2 className="section__title" id="catalog-title">Популярные букеты</h2>
          <p className="section__subtitle">Собираем каждый букет с любовью — под ваш повод и настроение</p>
          <div className="divider" aria-hidden="true" />
        </div>

        <ul className="catalog__grid" role="list" aria-label="Каталог букетов">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>

        <div className="catalog__more">
          <a
            href="#contact"
            className="btn btn--outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Полный каталог по запросу
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li className="product-card" ref={ref} data-animate>
      <div className={`product-card__image product-card__image--${product.theme}`} aria-hidden="true">
        {product.emoji}
        <span className={`product-card__badge product-card__badge--${product.badge.mod}`}>
          {product.badge.label}
        </span>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.desc}</p>
        <ul className="product-card__composition" role="list" aria-label="Состав">
          {product.tags.map(({ label, green }) => (
            <li key={label} className={`flower-tag${green ? ' flower-tag--green' : ''}`}>
              {label}
            </li>
          ))}
        </ul>
        <div className="product-card__footer">
          <div>
            <div className="product-card__price">{product.price}</div>
            <div className="product-card__price-note">{product.stems}</div>
          </div>
          <a
            href="#contact"
            className="btn btn--primary btn--sm"
            onClick={scrollToContact}
            aria-label={`Заказать букет ${product.title}`}
          >
            Заказать
          </a>
        </div>
      </div>
    </li>
  );
}
