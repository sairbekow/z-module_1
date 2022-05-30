import config from '../data/config.json'

class Timer {
  constructor() {
    this.timerId = null
  }

  start = () => {
    this.timerId = setInterval(this.render, 1000)
  }

  render = () => {
    const timer = document.querySelectorAll('.timer__element')

    const daysElement = timer[0]
    const hoursElement = timer[1]
    const minutesElement = timer[2]
    const secondsElement = timer[3]

    const remainingDays = this.correctTime(this.calcRemainingDay(this.calcRemainingTime()))
    const remainingHours = this.correctTime(this.calcRemainingTime().getUTCHours())
    const remainingMinutes = this.correctTime(this.calcRemainingTime().getMinutes())
    const remainingSeconds = this.correctTime(this.calcRemainingTime().getSeconds())

    daysElement.textContent = remainingDays
    hoursElement.textContent = remainingHours
    minutesElement.textContent = remainingMinutes
    secondsElement.textContent = remainingSeconds
  }

  correctTime = (time) => {
    if(String(time).length < 2) {
      return "0" + time
    }
    return time
  }

  calcRemainingTime = () => {
    const timerBlock = document.querySelector('.timer')

    const deadline = config.timerEndDate.join('T')

    const deadlineTimestamp = Date.parse(deadline)
    const currentTimestamp = Date.now()

    const diff = deadlineTimestamp - currentTimestamp

    if(diff <= 0) {
      clearInterval(this.timerId)
      timerBlock.remove()
    }

    return new Date(diff)
  }

  calcRemainingDay = (mseconds) => {
    const seconds = mseconds / 1000
    const hours = seconds / 3600
    const days = hours / 24

    return Math.floor(days)
  }
}

export default Timer