import config from '../data/config.json'

let timerId = null

const setTimer = () => {
  timerId = setInterval(renderTimer, 1000);
}

const renderTimer = () => {
  const timer = document.querySelectorAll('.timer__element')

  const daysElement = timer[0]
  const hoursElement = timer[1]
  const minutesElement = timer[2]
  const secondsElement = timer[3]

  const remainingDays = correctTime(getDay(calcRemainingTime()))
  const remainingHours = correctTime(calcRemainingTime().getUTCHours())
  const remainingMinutes = correctTime(calcRemainingTime().getMinutes())
  const remainingSeconds = correctTime(calcRemainingTime().getSeconds())

  daysElement.textContent = remainingDays
  hoursElement.textContent = remainingHours
  minutesElement.textContent = remainingMinutes
  secondsElement.textContent = remainingSeconds
}

const correctTime = (time) => {
  if(String(time).length < 2) {
    return "0" + time
  }
  return time
}

const getDay = (mseconds) => {
  const seconds = mseconds / 1000
  const hours = seconds / 3600
  const days = hours / 24

  return Math.floor(days)
}

const calcRemainingTime = () => {
  const timerBlock = document.querySelector('.timer')

  const deadline = config.timerEndDate.join('T')

  const deadlineTimestamp = Date.parse(deadline)
  const currentTimestamp = Date.now()

  const diff = deadlineTimestamp - currentTimestamp

  if(diff <= 0) {
    clearInterval(timerId)
    timerBlock.remove()
  }

  return new Date(diff)
}

export default setTimer