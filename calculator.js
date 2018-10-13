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
      /* if current display number is 0,
      next number clicked should replace 0
      otherwise, append the next number clicked to the current display number */
      if (displayedNum === '0') {
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

  }
})