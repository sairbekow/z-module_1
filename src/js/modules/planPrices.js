import config from "../data/config.json"

class PlanPrices {
  constructor() {
    this.planPrices = document.querySelectorAll('.pricing-option__price')
    this.planNames = document.querySelectorAll(".pricing-option__title")

    this.actualPlanData = config.plans
  }

  render = () => {
    for(let i = 0; i < 3; i++) {
      this.planPrices[i].textContent = `${this.actualPlanData[i].price}$`
      this.planNames[i].textContent = this.actualPlanData[i].name
    }
  }
}

export default PlanPrices

