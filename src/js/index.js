import '../css/style.css'

import Testimonials from "./modules/testimonials"
import Modal from "./modules/Modal/modal"
import Download from "./modules/download"
import Form from "./modules/Modal/form"
import Timer from "./modules/timer"
import ThemeColorSwitch from "./modules/themeColorSwitch"
import PlanPrices from "./modules/planPrices"
import BurgerMenu from "./modules/Header/burgerMenu"

window.addEventListener('DOMContentLoaded', () => {
  new Modal().initialize()
  new Form().initialize()
  new BurgerMenu().initialize()
  new Timer().start()
  new ThemeColorSwitch().handleChangeMode()
  new PlanPrices().render()
  new Testimonials().render()
  new Download().setDownloadLinkUrl()
})