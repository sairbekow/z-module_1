import '../css/style.css'

import Testimonials from "./modules/testimonials";
import scrollToSection from "./modules/Header/scrollToSection";
import Modal from "./modules/Modal/modal";
import Download from "./modules/download";
import Form from "./modules/Modal/form";
import Timer from "./modules/timer";
import ThemeColorSwitch from "./modules/themeColorSwitch";
import PlanPrices from "./modules/planPrices";


window.addEventListener('DOMContentLoaded', () => {
  new Modal().initialize()
  new Form().initializeForm()
  new Timer().start()
  new ThemeColorSwitch().handleChangeMode()
  new PlanPrices().render()
  new Testimonials().render()
  new Download().setDownloadLinkUrl()
  scrollToSection()
})
