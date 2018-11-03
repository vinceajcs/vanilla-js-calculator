const calculator = document.querySelector('.calculator')
const display = document.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action

    const keyContent = key.textContent
    const displayedNum = display.textContent

    const previousKeyType = calculator.dataset.previousKeyType

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

      // store first value and operator by adding it to custom attribute
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') { // equal key pressed
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      display.textContent = calculate(firstValue, operator, secondValue)
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


// called when equal key is pressed
const calculate = (n1, operator, n2) => {
  let result = ''

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}