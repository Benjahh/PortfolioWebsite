import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavLinks = ({ className }) => {
  return (
    <>
      <AnchorLink href="#home" className={className}>
        HOME
      </AnchorLink>
      <AnchorLink href="#about" className={className}>
        ABOUT
      </AnchorLink>
      <AnchorLink href="#skills" className={className}>
        SKILLS
      </AnchorLink>
      <AnchorLink href="#projects" className={className}>
        PROJECTS
      </AnchorLink>
    </>
  );
};
