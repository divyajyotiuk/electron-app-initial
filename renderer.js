const clickButton = document.getElementById('click-button')
const resetButton = document.getElementById('reset-button')

clickButton.addEventListener('click', function(){
    clickButton.innerHTML = 'Button clicked!'
})

resetButton.addEventListener('click', function(){
    clickButton.innerHTML = 'Click me!'
})