import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

// Logo
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

// Navigation desktop
export const Div2 = styled.ul`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  list-style: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none; // cacher le menu desktop sur mobile
  }
`;

// Social + Hamburger
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .mobile-menu-icon {
    display: none;
    cursor: pointer;
    margin-left: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .mobile-menu-icon {
      display: block;
    }
  }
`;

// Liens
export const NavLink = styled.a`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.3s ease;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  color: white;
  border-radius: 50px;
  padding: 8px;
  margin-left: 1rem;
  transition: 0.3s ease;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
  }
`;

// Mobile Menu
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px; // hauteur du header
  right: 0;
  width: 100%;
  background-color: #0f1624;
  text-align: center;
  padding: 1rem 0;
  z-index: 999;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const MobileMenuItem = styled.div`
  margin: 1rem 0;
`;
