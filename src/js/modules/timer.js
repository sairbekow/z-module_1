import config from '../data/config.json'

class Timer {
  timerId = null

  start = () => {
    this.render()
    this.timerId = setInterval(this.render, 1000)
  }

  render = () => {
    const timer = document.querySelectorAll('.timer__element')

    const daysElement = timer[0]
    const hoursElement = timer[1]
    const minutesElement = timer[2]
    const secondsElement = timer[3]

    const remainingDays = this.correctTimeByAddingZero(this.calcRemainingDay(this.calcRemainingTime()))
    const remainingHours = this.correctTimeByAddingZero(this.calcRemainingTime().getUTCHours())
    const remainingMinutes = this.correctTimeByAddingZero(this.calcRemainingTime().getMinutes())
    const remainingSeconds = this.correctTimeByAddingZero(this.calcRemainingTime().getSeconds())

    daysElement.textContent = remainingDays
    hoursElement.textContent = remainingHours
    minutesElement.textContent = remainingMinutes
    secondsElement.textContent = remainingSeconds
  }

  correctTimeByAddingZero = (time) => {
    if(String(time).length < 2) {
      return `0${time}`
    }
    return time
  }

  calcRemainingTime = () => {
    const timerBlock = document.querySelector('.timer')

    const deadline = this.correctDateForTimestamp()

    const deadlineTimestamp = Date.parse(deadline)
    const currentTimestamp = Date.now()

    const diff = deadlineTimestamp - currentTimestamp

    if(diff <= 0) {
      clearInterval(this.timerId)
      timerBlock.className = 'timer d-none'
    } else {
      timerBlock.classList.remove('d-none')
    }

    return new Date(diff)
  }

  calcRemainingDay = (mseconds) => {
    const seconds = mseconds / 1000
    const hours = seconds / 3600
    const days = hours / 24

    return Math.floor(days)
  }

  correctDateForTimestamp = () => {
    const { timerEndDate } = config

    const date = {
      day: timerEndDate.match(/^\d{2}/)[0],
      month: timerEndDate.match(/\.\d{2}/)[0].slice(1),
      year: timerEndDate.match(/\.\d{4}/)[0].slice(1),
      hour: timerEndDate.match(/\d{2}:/)[0],
      minute: timerEndDate.match(/\d{2}$/)[0]
    }

     return `${date.year}-${date.month}-${date.day}T${date.hour}${date.minute}`
  }
}

export default Timer