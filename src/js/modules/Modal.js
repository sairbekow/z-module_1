const Modal = () => {
  const buttons = document.querySelectorAll('.buy-btn')
  const wrapper = document.querySelector('.wrapper')
  const closeBtn = document.querySelector('.modal__close-btn')

  closeBtn.addEventListener('click', closeModal)

  for (let button of buttons) {
    button.addEventListener('click', openModal)
  }
}

const closeModal = () => {
  const modal = document.querySelector('.modal')
  const wrapper = document.querySelector('.wrapper')

  wrapper.className = "wrapper"
  modal.className = 'modal d-none'
}

const openModal = () => {
  window.scrollTo(0, 0)

  const modal = document.querySelector('.modal')
  const wrapper = document.querySelector('.wrapper')

  wrapper.className = "wrapper overlay"
  modal.className = 'modal d-block'
}

export default Modal;