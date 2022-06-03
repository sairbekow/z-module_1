class ThemeColorSwitch {

  handleChangeMode = () => {
    const darkModeBtn = document.querySelector('.dark-btn')
    const lightModeBtn = document.querySelector('.light-btn')

    darkModeBtn.addEventListener('click',
      () => this.renderColorMode('dark'))

    lightModeBtn.addEventListener('click',
      () => this.renderColorMode('light'))
  }

  renderColorMode = (color) => {
    const hueModeBackground = document.querySelector('.dark-mode')
    const hueModeTitle = document.querySelector('.color-mode')
    const hueModeName = document.querySelector('.dark-mode__name')

    hueModeName.textContent = `${color} mode`
    hueModeTitle.textContent = color
    hueModeBackground.className = `dark-mode ${color}-regime`
  }
}

export default ThemeColorSwitch