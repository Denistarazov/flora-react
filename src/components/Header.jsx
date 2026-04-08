import { useEffect, useState, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'hero',     label: 'Главная'  },
  { id: 'about',    label: 'О нас'    },
  { id: 'catalog',  label: 'Каталог'  },
  { id: 'services', label: 'Услуги'   },
  { id: 'contact',  label: 'Контакты' },
];

export default function Header({ activeSection }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
        <div className="container">
          <nav className="nav" aria-label="Основная навигация">
            <button
              className="nav__logo"
              onClick={() => scrollTo('hero')}
              aria-label="Флория — на главную"
            >
              <span className="nav__logo-icon" aria-hidden="true">🌸</span>
              <span className="nav__logo-text">Фло<span>рия</span></span>
            </button>

            <ul className="nav__list" role="list">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={`nav__link${activeSection === id ? ' is-active' : ''}`}
                    onClick={() => scrollTo(id)}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="tel:+74951234567"
              className="btn btn--primary btn--sm nav__cta"
              aria-label="Позвонить нам"
            >
              <PhoneIcon />
              Заказать звонок
            </a>

            <button
              className={`nav__toggle${menuOpen ? ' nav__toggle--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-controls="nav-mobile"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
              <span className="nav__toggle-bar" />
            </button>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div id="nav-mobile" className="nav__mobile" aria-label="Мобильное меню">
          <ul className="nav__mobile-list" role="list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav__mobile-link${activeSection === id ? ' is-active' : ''}`}
                  onClick={() => scrollTo(id)}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="tel:+74951234567"
            className="btn btn--primary btn--full"
            aria-label="Позвонить нам"
            onClick={() => setMenuOpen(false)}
          >
            Заказать звонок
          </a>
        </div>
      )}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.72 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
