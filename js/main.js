//Abrir y cerrar botones Preguntas frecuentes

const answer = document.querySelectorAll(".answer")
const dropdownAnswer = document.querySelectorAll(".question > img")

dropdownAnswer.forEach((dropAnswer,i)=>{
    dropAnswer.addEventListener("click", ()=>{
        
            if(answer[i].classList[1] == "hidden"){
                answer[i].classList.remove("hidden")
                dropAnswer.src = "./asset/desplegableArriba.png"
            }else{
                answer[i].classList.add("hidden")
                dropAnswer.src = "./asset/desplegableAbajo.png"
            }
        })
        })
       
