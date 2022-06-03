import config from "../data/config.json"

class PlanPrices {
  planPrices = document.querySelectorAll('.pricing-option__price')
  planNames = document.querySelectorAll(".pricing-option__title")

  modalRadioInputs = document.querySelectorAll('.plan__item input')

  actualPlanData = config.plans

  render = () => {
    for (let i = 0; i < 3; i++) {
      this.planPrices[i].textContent = `$${this.actualPlanData[i].price}`
      this.planNames[i].textContent = this.actualPlanData[i].name

      this.modalRadioInputs[i].setAttribute('data-plan-name', this.actualPlanData[i].name)
      this.modalRadioInputs[i].setAttribute('data-plan-price', this.actualPlanData[i].price)
    }
  }
}

export default PlanPrices

