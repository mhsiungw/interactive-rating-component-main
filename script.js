const ratingForm = document.querySelector('.rating__form')
const radios = document.querySelectorAll('.rating__radios')
const resultEle = document.querySelector('.rating__p--result')
const container = document.querySelectorAll('.container')
const button = document.querySelector('button')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')
let result = -1

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (result === -1) return
    resultEle.innerText = `You selected ${result} out of 5`
    button.classList.add('active')
    setTimeout(() => {
        container.forEach((n) => n.classList.toggle('hide'))
    }, 1500)
})

radios.forEach((node) => {
    node.addEventListener('click', (e) => {
        if (e.target.tagName === 'LABEL') result = e.target.innerText.trim()
    })
})

toggle.addEventListener('click', () => {
    html.classList.toggle('light')
})
