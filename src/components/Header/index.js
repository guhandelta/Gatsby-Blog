import React, {useState} from "react"
import { Link } from "gatsby"
// Components
import Menu from '../Menu'
import Hamburger from '../Hamburger'
import MobileMenu from '../MobileMenu'
// Hooks
import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"
// styles
import {Wrapper, Logo} from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>  
      <div>Mode Button</div>
    </Wrapper>
  )
}

export default Header
