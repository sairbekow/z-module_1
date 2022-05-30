import config from "../data/config.json"

class PlanPrices {
  constructor() {
    this.standartPlan = document.querySelector("#standart")
    this.premiumPlan = document.querySelector("#premium")
    this.lifetimePlan = document.querySelector("#lifetime")

    this.actualPrices = config.plans
  }

  render = () => {
    this.standartPlan.prepend("$" + this.actualPrices[0].price)
    this.premiumPlan.prepend("$" + this.actualPrices[1].price)
    this.lifetimePlan.prepend("$" + this.actualPrices[2].price)
  }
}

export default PlanPrices

