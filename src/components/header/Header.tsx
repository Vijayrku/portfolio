import type { FC } from "react";
import Navbar from "../../blocks/navbar/Navbar";
import type { HeaderProps } from "./Header.props";
import { Link } from "react-router-dom";
import "./Header.scss";
import type React from "react";

/**
 *
 * @param param0 - The properties for the Header component.
 * @param param0.logoText - The text to display in the logo.
 * @param param0.logoUrl - The URL for the logo image.
 * @param param0.navItems - An array of navigation items, each with a label and
 * @returns
 */

const Header: FC<HeaderProps> = ({ logoText, logoUrl, items, logoImage }) => {

  /**
   * Toggles the menu visibility.
   * This function can be expanded to handle menu state changes.
   */

  const toogleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const span = target?.querySelector("span");
    if (!span) {
      console.warn("Toggle button does not contain a span element");
      return;
    }
    const isMenu = span.textContent === 'menu';
    span.textContent = isMenu ? 'close' : 'menu';

    const navMenu = target?.nextElementSibling?.querySelector('.cmp-navbar__menu') as HTMLElement | null;
    if (navMenu) {
        navMenu.classList.toggle('cmp-navbar__menu--shown', isMenu);
    }    
};

  /**
   * Renders the header component with a logo and navigation items.
   *
   * @param {string} logoText - The text to display in the logo.
   * @param {string} logoUrl - The URL for the logo image.
   * @param {Array} items - An array of navigation items, each with a label and href.
   * @returns {JSX.Element} The rendered header component.
   */

  return (
    <header className="cmp-header">
      <Link className="cmp-header__logo" to={logoUrl ?? "/"}>
        {logoImage ? (
          <img src={logoImage} alt={logoText ?? "Logo"} />
        ) : (
          <span className="cmp-header__title">{logoText ?? "Logo"}</span>
        )}
      </Link>
      <button className="cmp-header__toggle" aria-label="Toggle menu" onClick={(e) => toogleMenu(e)}>
        <span className="material-icons">menu</span>
      </button>
      <Navbar variant="header" items={items} />
    </header>
  );
};

export default Header;
