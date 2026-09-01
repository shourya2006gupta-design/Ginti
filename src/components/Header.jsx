import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import Translate from './Translate';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', exact: true },
    { to: '/understand', label: 'Understand' },
    { to: '/self-enumerate', label: 'Self-Enumerate' },
    { to: '/explore', label: 'Explore' },
    { to: '/trust', label: 'Trust' },
  ];

  return (
    <header className="header" role="banner">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label="Ginti — Home">
          <div className="header__logo" aria-hidden="true">गि</div>
          <div>
            <div className="header__title">Ginti</div>
            <div className="header__subtitle"><Translate>Census 2027 Companion</Translate></div>
          </div>
        </NavLink>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} role="navigation" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'nav__link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <Translate>{item.label}</Translate>
            </NavLink>
          ))}
        </nav>

        <div className="header__controls">
          <LanguageSelector />
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
