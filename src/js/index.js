import '../css/style.css'

import handleChangeColor from "./modules/DarkMode";
import Testimonials from "./modules/Testimonials";
import Pricing from "./modules/Pricing";
import scrollToSection from "./modules/Header";
import Modal from "./modules/Modal";
import setDownloadLinkUrl from "./modules/Download";

window.onload = () => {
  Modal()
  Pricing()
  Testimonials()
  scrollToSection()
  handleChangeColor()
  setDownloadLinkUrl()
}
