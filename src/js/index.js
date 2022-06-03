import '../css/style.css'

import Testimonials from "./modules/testimonials"
import Modal from "./modules/Modal/modal"
import Download from "./modules/download"
import Form from "./modules/Modal/form"
import Timer from "./modules/timer"
import ThemeColorSwitch from "./modules/themeColorSwitch"
import PlanPrices from "./modules/planPrices"
import SideBar from "./modules/Header/sideBar"
import scrollToSection from "./modules/Header/scrollToSection";


window.addEventListener('DOMContentLoaded', () => {
  new Modal().initialize()
  new Form().initialize()
  new SideBar().initialize()
  new Timer().start()
  new ThemeColorSwitch().handleChangeMode()
  new PlanPrices().render()
  new Testimonials().render()
  new Download().setDownloadLinkUrl()
  scrollToSection()
})