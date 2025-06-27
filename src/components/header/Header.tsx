import type { FC } from "react";
import Navbar from "../../blocks/navbar/Navbar";
import type { HeaderProps } from "./Header.props";
import { Link } from 'react-router-dom';
/**
 * 
 * @param param0 - The properties for the Header component.
 * @param param0.logoText - The text to display in the logo.
 * @param param0.logoUrl - The URL for the logo image.
 * @param param0.navItems - An array of navigation items, each with a label and
 * @returns 
 */
const Header: FC<HeaderProps> = ({logoText, logoUrl, items, logoImage}) => {



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
        <div className="cmp-header__logo">
            <Link to={logoUrl ?? '/'}>
                {logoImage ? (
                    <img src={logoImage} alt={logoText ?? "Logo"} />
                ) : (
                    <span>{logoText ?? "Logo"}</span>
                )}
            </Link>
        </div>
        <Navbar items={items} />
    </header>
  );
}

export default Header;