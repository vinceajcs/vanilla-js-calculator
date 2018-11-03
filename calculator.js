const calculator = document.querySelector('.calculator')
const display = document.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action

    const keyContent = key.textContent
    const displayedNum = display.textContent

    if (!action) {
      /** if current display number is 0 or previous key pressed was an operator,
       * next number clicked should replace 0 or the previous number
       * otherwise, append the next number clicked to the current display number
       */

      if (displayedNum === '0' || previousKeyType == 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
    }

    if (action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide') {
      key.classList.add('is-depressed')
      // add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      console.log('equal key!')
    }

    /**
     * case when user hits number key after operator:
     * operator key should release its pressed state
     */

    // remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

  }
})