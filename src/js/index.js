import _ from 'lodash'
import '@public/index.css'

function component() {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('jinhyukoo')

  return element
}

document.body.appendChild(component())
