import styled from "styled-components";

// Container principal
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: #0f1624;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Logo
export const Div1 = styled.div`
  display: flex;
  align-items: center;
`;

// Navigation desktop
export const Div2 = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; // cacher sur mobile
  }
`;

// Social Icons + Hamburger
export const Div3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .mobile-menu-icon {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .mobile-menu-icon {
      display: block;
    }
  }
`;

// Liens
export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #00f0ff;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  color: white;
  border-radius: 50px;
  padding: 8px;
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
  top: 70px; // hauteur header
  right: 0;
  width: 100%;
  background-color: #0f1624;
  text-align: center;
  padding: 1rem 0;
  gap: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuItem = styled.div``;
