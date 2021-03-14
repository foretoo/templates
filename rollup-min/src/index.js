const hello = name => `Hello, ${name}!`
const names = ['Giho', 'Brup']

const message = names.reduce((mes, name) => mes + hello(name) + '<br>', '')
document.write(message)

// document.write(['Giho', 'Brup'].reduce((mes, name) => mes + `Hello, ${name}!<br>`, ''))
