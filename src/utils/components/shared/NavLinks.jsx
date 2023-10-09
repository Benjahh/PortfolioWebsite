import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavLinks = ({ className }) => {
  return (
    <>
      <AnchorLink href="#home" className={className}>
        Home
      </AnchorLink>
      <AnchorLink href="#about" className={className}>
        About
      </AnchorLink>
      <AnchorLink href="#skills" className={className}>
        Skills
      </AnchorLink>
      <AnchorLink href="#projects" className={className}>
        Projects
      </AnchorLink>
    </>
  );
};
