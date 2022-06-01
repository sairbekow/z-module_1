import config from '../data/config.json'

class Download{
  actualLink = config.appStoreLink

  setDownloadLinkUrl = () => {
    const downloadLinks = document.querySelectorAll('.get-app')

    for(let link of downloadLinks) {
      link.href = this.actualLink
    }
  }
}

export default Download