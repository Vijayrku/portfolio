import type { FC } from "react";
import type { NavProps } from "./Navbar.props";
import { Link } from "react-router-dom";
import "./Navbar.scss";
/**
 *
 * @param param0 - The properties for the Navbar component.
 * @param param0.items - An array of navigation items, each with a label, href, and optional active state.
 * @returns
 */
const Navbar: FC<NavProps> = ({ items }) => {
  /**
   * Renders a navigation bar with a list of items.
   * Each item can be a link or a plain text, and can be marked as active.
   *
   * @param {Array} items - An array of navigation items, each with a label, href, and optional active state.
   * @returns {JSX.Element} The rendered navigation bar component.
   */
  return (
    <nav className="cmp-navbar">
      <ul className="cmp-navbar__menu">
        {items?.map((item) => (
          <li
            key={item.label}
            className={`cmp-navbar__item ${item.active ? "cmp-navbar__item--active" : ""}`}
          >
            {item.href ? (
              <Link className="cmp-navbar__link" to={item.href}>{item.label}</Link>
            ) : (
              <span className="cmp-navbar__text">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
