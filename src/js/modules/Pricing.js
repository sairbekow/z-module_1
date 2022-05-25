import config from "../data/config.json"

const Pricing = () => {
  const data = config.plans

  const standartPlan = document.querySelector("#standart")
  const premiumPlan = document.querySelector("#premium")
  const lifetimePlan = document.querySelector("#lifetime")

  standartPlan.prepend("$" + data[0].price)
  premiumPlan.prepend("$" + data[1].price)
  lifetimePlan.prepend("$" + data[2].price)
}

export default Pricing

