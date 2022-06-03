class SideBar {

  initialize = () => {
    const burger = document.querySelector('.burger')
    const sidebarCloseBtn = document.querySelector('.sidebar__close-btn')
    const sidebarLinks = document.querySelectorAll('.sidebar__item-link')

    for (let link of sidebarLinks) {
      link.addEventListener('click', SideBar.hideSideBar)
    }

   burger.addEventListener('click', this.showSideBar)
   sidebarCloseBtn.addEventListener('click', SideBar.hideSideBar)

  }

  showSideBar = () => {
    const sidebarNav = document.querySelector('.sidebar__nav')

   sidebarNav.style.right = '0px'
  }

  static hideSideBar = () => {
    const sidebarNav = document.querySelector('.sidebar__nav')

   sidebarNav.style.right = '-800px'
  }
}


export default SideBar