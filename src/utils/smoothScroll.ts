export const smoothScrollTo = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
  e.preventDefault();
  smoothScrollTo(sectionId, 80);
};

