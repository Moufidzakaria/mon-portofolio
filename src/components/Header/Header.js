import Link from "next/link";
import React, { useState } from "react";
import { AiFillFacebook, AiFillGithub, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  MobileMenu,
  MobileMenuItem,
} from "./HeaderStyles";
import { FacebookUrl, GithubUrl } from "../../constants/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      {/* Logo */}
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>

      {/* Navigation Desktop */}
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>

      {/* Social Icons + Hamburger */}
      <Div3>
        <SocialIcons href={GithubUrl} target="_blank">
          <AiFillGithub size="2rem" />
        </SocialIcons>
        <SocialIcons href={FacebookUrl} target="_blank">
          <AiFillFacebook size="2rem" />
        </SocialIcons>

        {/* Hamburger pour mobile */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size="2.5rem" /> : <AiOutlineMenu size="2.5rem" />}
        </div>
      </Div3>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu>
          <MobileMenuItem onClick={toggleMenu}>
            <Link href="#projects">
              <NavLink>Projects</NavLink>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem onClick={toggleMenu}>
            <Link href="#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem onClick={toggleMenu}>
            <Link href="#about">
              <NavLink>About</NavLink>
            </Link>
          </MobileMenuItem>
        </MobileMenu>
      )}
    </Container>
  );
};

export default Header;
