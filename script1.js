const btnclear = document.querySelector(".clear")
const story = document.querySelector(".story")
const btn = document.querySelector(".create")
const name =  document.querySelector(".name")
const family =  document.querySelector(".family")
const years =  document.querySelector(".years")
const clas =  document.querySelector(".clas")
const oge1 =  document.querySelector(".OGE1")
const oge2 =  document.querySelector(".OGE2")
const oge3 =  document.querySelector(".OGE3")
const oge4 =  document.querySelector(".OGE4")
const notstupid =  document.querySelector(".notstupid")

function click(){
    story.value =  `Резюме ${name.value} ${family.value} ${years.value} лет.\n 
    -Класс:${clas.value} \n 
    -ОГЭ ${oge1.value} , ${oge2.value} , ${oge3.value} , ${oge4.value} \n
    -11 Класс: ${notstupid.value}`

    
}

btn.addEventListener('click', click)