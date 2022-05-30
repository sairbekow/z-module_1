class Modal {
  constructor() {
    this.openModalButtons = document.querySelectorAll('.buy-btn')
    this.closeBtn = document.querySelector('.modal__close-btn')
  }

  initialize = () => {
    this.closeBtn.addEventListener('click', Modal.closeModal)

    for (let button of this.openModalButtons) {
      button.addEventListener('click', Modal.openModal)
    }
  }

  static openModal = (e) => {
    const standartPlanInput = document.querySelector('#low-price')
    const premiumPlanInput = document.querySelector('#middle-price')
    const lifetimePlanInput = document.querySelector('#high-price')

    const modal = document.querySelector('.modal__overlay')
    const body = document.body

    switch (e.target.name) {
      case 'standart-btn':
        standartPlanInput.checked = true
        break
      case 'premium-btn':
        premiumPlanInput.checked = true
        break
      case 'lifetime-btn':
        lifetimePlanInput.checked = true
        break
      default:
        lifetimePlanInput.checked = true
        break
    }

    body.className = 'modal-open'
    modal.className = 'modal__overlay d-block'
  }

  static closeModal = (e) => {
    const modal = document.querySelector('.modal__overlay')
    const body = document.body

    body.className = ''
    modal.className = 'modal__overlay d-none'
  }
}

export default Modal;