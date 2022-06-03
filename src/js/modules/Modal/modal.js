class Modal {
  openModalButtons = document.querySelectorAll('.buy-btn')
  closeBtn = document.querySelector('.modal__close-btn')

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
      default:
        lifetimePlanInput.checked = true
        break
    }

    body.className = 'modal-open'
    modal.className = 'modal__overlay d-block'
  }

  static closeModal = () => {
    this.username = document.querySelector('#username-field')
    this.email = document.querySelector('#email-field')
    this.warningText = document.querySelectorAll('.input-warning')
    this.loadingBlock = document.querySelector('.form__loading-block')
    this.questionnaryCheckboxes = document.querySelectorAll('.questionnaire__item input')

    const modal = document.querySelector('.modal__overlay')
    const body = document.body

    body.className = ''
    modal.className = 'modal__overlay d-none'

    this.username.value = ''
    this.email.value = ''

    //reset
    this.username.classList.remove('wrong-field')
    this.email.classList.remove('wrong-field')
    this.loadingBlock.style.display = "none"

    this.warningText[0].textContent = ''
    this.warningText[1].textContent = ''
    this.warningText[2].textContent = ''

    this.questionnaryCheckboxes.forEach(el => {
      el.checked = false
    })
  }
}

export default Modal