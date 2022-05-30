import Modal from "./modal";

class Form {
  constructor() {
    this.loadingBlock = document.querySelector('.form__loading-block')
    this.formSubmit = document.querySelector('.form')
    this.username = document.querySelector('#username-field')
    this.email = document.querySelector('#email-field')
    this.warningText = document.querySelectorAll('.input-warning')
    this.questionnaryCheckboxes = document.querySelectorAll('.questionnaire__item input')
  }

  initializeForm = () => {
    this.formSubmit.addEventListener('submit', this.submit)
  }

  submit = (e) => {
    e.preventDefault()
    const isFormValid = this.validate()

    if (isFormValid) {
      this.loadingBlock.style.display = "flex"

      setTimeout(() => {
        this.username.value = ""
        this.email.value = ""

        //reset
        this.username.classList.remove('empty-field')
        this.email.classList.remove('empty-field')
        this.warningText[0].style.display = 'none'
        this.warningText[1].style.display = 'none'
        this.warningText[1].style.display = 'none'
        this.loadingBlock.style.display = 'none'
        this.questionnaryCheckboxes.forEach(el => {
          el.checked = false
        })

        Modal.closeModal()
      }, 3000)
    }
  }

  validate = () => {
    const validName = this.validateName()
    const validEmail = this.validateEmail()
    const isQuestionnaireChecked = this.validateQuestionnary()

    if (validEmail || validName) {
      if(validEmail) {
        this.email.classList.remove('empty-field')
        this.warningText[1].textContent = ''

      } else {
        this.warningText[0].textContent = ''
        this.username.classList.remove('empty-field')
      }
    }

    return validName && validEmail && isQuestionnaireChecked
  }

  validateQuestionnary = () => {
    let isChecked = false

    for(let checkbox of this.questionnaryCheckboxes) {
      if(checkbox.checked) {
        isChecked = true
        break
      }
    }

    if(!isChecked) {
      this.warningText[2].textContent = 'choose at least one*'
    }

    return isChecked
  }

  validateName = () => {
    if (this.username.value.length < 3) {
      this.username.classList.add('empty-field')
      this.warningText[0].textContent = 'this field is reqiured*'
      return false
    }
    return true
  }

  validateEmail = () => {
    const regexValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (this.email.value.length === 0) {
      this.email.classList.add('empty-field')
      this.warningText[1].textContent = 'this field is reqiured*'

      return false
    }

    else if (!this.email.value.match(regexValidEmail)) {
      this.email.classList.add('empty-field')
      this.warningText[1].textContent = 'required a valid email*'

      return false
    }
    return true
  }
}


export default Form