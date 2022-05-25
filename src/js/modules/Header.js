const scrollToSection = () => {
  const smoothLinks = document.querySelectorAll('.menu__item-link')

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();

      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

export default scrollToSection