import { css } from 'styled-components'
import { delay } from './usefulFunctions'

export const animatedTyping = async (word, updateMethod ) => {
  let alreadyTyped = ""
  for (let l = 0; l < word.length; l++) {
    const letter = word[l];
    const toType = alreadyTyped + letter
    updateMethod(toType)
    alreadyTyped = toType
    await delay(100)
  }
}

export const fillInput = async (inputClass, value, interval, updateMethod) => {
  await delay(interval)
  const input = document.querySelector(inputClass)
  if(input){
    input.click()
    await delay(1000)
    await animatedTyping(value, updateMethod)
  }
}

export const clickDropDown = async (controlClass, optionClass, optionIndex, interval) => {
  await delay(interval)
  const control = document.querySelector(controlClass)
  if(control){
    control.click()
    await delay(1000)
    const options = document.querySelectorAll(optionClass)
    if(options){
      const option = options[optionIndex]
      if(option) option.click()
    }
  }
}
export const SimulateButtonClick = async (buttonClass, selectedClass, interval) => {
  await delay(interval && interval >= 0 ? interval : 1000)
  const btn = document.querySelector(`.${buttonClass}`)
  if(btn){
    btn.classList.add(selectedClass)
    await delay(500)
    btn.classList.remove(selectedClass)
  }
}

export const growAnimation = (name, delay) => {
  return css`
    animation-duration: 0.5s; 
    animation-fill-mode: both; 
    animation-name: ${name}; 
    animation-iteration-count: 1;
    animation-delay: ${delay}s;

    @keyframes ${name} {
      from { transform: scale(0);}
      to {transform: scale(1);}
    }
  `
}

export const growMoreAnimation = (name, delay) => {
  return css`
    animation-duration: 0.5s; 
    animation-fill-mode: both; 
    animation-name: ${name}; 
    animation-iteration-count: 1;
    animation-delay: ${delay}s;

    @keyframes ${name} {
      0% { transform: scale(0);}
      70% {transform: scale(1.2);}
      100% {transform: scale(1);}
    }
  `
}