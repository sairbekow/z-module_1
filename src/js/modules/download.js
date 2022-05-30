import config from '../data/config.json'

class Download{
  link = config.appStoreLink

  setDownloadLinkUrl = () => {
    const downloadLink = document.querySelector('.download__link')

    downloadLink.href = this.link
  }
}

export default Download