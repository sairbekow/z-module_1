import config from '../data/config.json'

const setDownloadLinkUrl = () => {
  const link = config.appStoreLink
  const downloadLink = document.querySelector('.download__link')

  downloadLink.href = link
}

export default setDownloadLinkUrl