class BurgerMenu {

  initialize = () => {
    const burgerBtn = document.querySelector('.burger')
    const burgerCloseBtn = document.querySelector('.sidebar__close-btn')
    const burgerNavLinks = document.querySelectorAll('.sidebar__item-link')

    for (let link of burgerNavLinks) {
      link.addEventListener('click', BurgerMenu.hideSideBar)
    }

    burgerBtn.addEventListener('click', this.showSideBar)
    burgerCloseBtn.addEventListener('click', BurgerMenu.hideSideBar)

  }

  showSideBar = () => {
    const burgerNav = document.querySelector('.sidebar__nav')

    burgerNav.style.right = '0px'
  }

  static hideSideBar = () => {
    const burgerNav = document.querySelector('.sidebar__nav')

    burgerNav.style.right = '-800px'
  }
}


export default BurgerMenu