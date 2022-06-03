import Modal from "./modal"

class Form {
  loadingBlock = document.querySelector('.form__loading-block')
  formSubmit = document.querySelector('.form')
  username = document.querySelector('#username-field')
  email = document.querySelector('#email-field')
  warningText = document.querySelectorAll('.input-warning')
  questionnaireCheckboxes = document.querySelectorAll('.questionnaire__item')

  isAllFieldsValid = true

  initialize = () => {
    this.formSubmit.addEventListener('submit', this.submit)
    this.username.addEventListener('input', this.validateName)
    this.email.addEventListener('input', this.validateEmail)
    this.questionnaireCheckboxes.forEach(el => el.firstElementChild
      .addEventListener('change', this.validateQuestionnary))
  }

  submit = (e) => {
    e.preventDefault()

    this.validateName()
    this.validateEmail()
    this.validateQuestionnary()

    if (this.isAllFieldsValid) {
      this.loadingBlock.style.display = "flex"

      setTimeout(() => {
        console.log(this.createResponseObject())
        Modal.closeModal()
      }, 2000)
    }
  }

  validateName = () => {
    if (this.username.value.trim().length < 3
      && this.username.value.length !== 0) {
      this.username.classList.add('wrong-field')
      this.warningText[0].textContent = 'should be more then 3 symbols*'

      this.isAllFieldsValid = false

    } else if (this.username.value.length === 0) {
      this.username.classList.add('wrong-field')
      this.warningText[0].textContent = 'this field is required*'

      this.isAllFieldsValid = false

    } else {
      this.warningText[0].textContent = ''
      this.username.classList.remove('wrong-field')

      this.isAllFieldsValid = true
    }

  }

  validateEmail = () => {
    const regexValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (this.email.value.trim().length === 0) {
      this.email.classList.add('wrong-field')
      this.warningText[1].textContent = 'this field is reqiured*'

      this.isAllFieldsValid = false

    } else if (!this.email.value.match(regexValidEmail)) {
      this.email.classList.add('wrong-field')
      this.warningText[1].textContent = 'required a valid email*'

      this.isAllFieldsValid = false

    } else {
      this.email.classList.remove('wrong-field')
      this.warningText[1].textContent = ''

      this.isAllFieldsValid = true
    }
  }

  validateQuestionnary = () => {
    let isChecked = Array.from(this.questionnaireCheckboxes).some(el => el.firstElementChild.checked)

    if (!isChecked) {
      this.warningText[2].textContent = 'choose at least one*'
      this.isAllFieldsValid = false
    } else {
      this.warningText[2].textContent = ''
      this.isAllFieldsValid = true
    }
  }

  createResponseObject = () => {
    const modalRadioInputs = document.querySelectorAll('.plan__item input')

    const username = this.username.value
    const email = this.email.value

    const plan = () => {
      let res = null

      modalRadioInputs.forEach(el => {
        if(el.checked) {
          const name = el.getAttribute('data-plan-name')
          const price = el.getAttribute('data-plan-price')
          res = {name, price}
        }
      })
      return res
    }

    const questiounnaire = Array.from(this.questionnaireCheckboxes)
      .reduce((prev, el) => {
        return el.firstElementChild.checked
          ? [...prev, el.lastElementChild.textContent] : prev
      }, [])

    return {username, email, plan: plan(), questiounnaire}
  }
}

export default Form