// variáveis

var btnDarkMode = document.getElementById('btnDarkMode')
var body = document.body
var title = document.querySelector('.introTitle')
var card1 = document.querySelectorAll('.card')
var numberCard1 = document.querySelectorAll('.number')
var ovTitle = document.querySelector('.overviewTitle')
var cardOv = document.querySelectorAll('.cardOverview')
var cardOvNumber = document.querySelectorAll('.overviewNumber')

// eventos

btnDarkMode.addEventListener('click', darkMode)

// funções

function darkChanges(){
    body.style.backgroundColor = 'hsl(230, 17%, 14%)'
    title.style.color = 'white'
    card1.forEach((e) => {
        e.style.backgroundColor = 'hsl(228, 28%, 20%)'    
    })
    numberCard1.forEach((e)=>{
        e.style.color = 'white'
    })
    ovTitle.style.color = 'white'
    cardOv.forEach((e)=>{
        e.style.backgroundColor = 'hsl(228, 28%, 20%)'
    })
    cardOvNumber.forEach((e)=>{
        e.style.color = 'white'
    })
}

function lightChanges(){
    body.style.backgroundColor = 'white'
    title.style.color = 'black'
    card1.forEach((e) => {
        e.style.backgroundColor = 'hsl(227, 47%, 96%)'    
    })
    numberCard1.forEach((e)=>{
        e.style.color = 'black'
    })
    ovTitle.style.color = 'hsl(228, 12%, 44%)'
    cardOv.forEach((e)=>{
        e.style.backgroundColor = 'hsl(227, 47%, 96%)'
    })
    cardOvNumber.forEach((e)=>{
        e.style.color = 'black'
    })
}

function darkMode(){
    if(btnDarkMode.value == 'no'){
        btnDarkMode.value = 'yes'
    }else{
        btnDarkMode.value = 'no'
    }
    console.log(btnDarkMode.value)
    if(btnDarkMode.value == 'yes'){
        darkChanges()
    }else{
        lightChanges()
    }
}