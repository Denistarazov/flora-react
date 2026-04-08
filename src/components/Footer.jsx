export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">🌸 Флория</div>
          <p>&copy; {new Date().getFullYear()} Флория — Цветочный магазин. Москва, ул. Цветочная, 12</p>
          <p>
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
            &nbsp;·&nbsp;
            <a href="mailto:hello@floriya.ru">hello@floriya.ru</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
