// Variables
const startSection = document.getElementById('startSection');
const quizForm = document.getElementById('quizForm');
const resultSection = document.getElementById('resultSection');
const restart = document.getElementById('restart');
const questionH2 = document.querySelectorAll('#quizForm h2');
const radioButton = document.getElementsByClassName('radioButton');
const topButton = document.getElementById('backToTop');
const audioButton = document.getElementById('audioButton');
const jigglypuff = document.querySelector('#audioButton img');

const audio = document.getElementById('littlerootTown');
audio.volume = 0.15;

const rightAnswers = ['answer1b', 'answer2a', 'answer3a', 'answer4d', 'answer5c', 'answer6a', 'answer7c', 'answer8b', 'answer9d', 'answer10c']
let notAnswered = '';
let answered = 0;


// Funciones
// Función para comparar valor con cada valor de un array
function compare(value, arr) {
    for (i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return true;
        }
    }
    
}

// Función para desabilitar inputs cuando se seleccione uno.
function disableAll(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i].disabled = true;
    }
}



// Eventos
// Evento para botón que activa/desactiva audio y cambia imagen del botón de audio.
let flag = true;
const unmuted = './assets/sprites/jigglypuff.gif';
const muted = './assets/sprites/jigglypuffMuted.png';
audioButton.addEventListener('click', function(event) {
    audio.muted = !audio.muted;
    if (flag) {
        jigglypuff.src = muted
    } else {
        jigglypuff.src = unmuted
    }
    flag = !flag;
})

// Evento para botón que scrollee al principio de la página (Back to top).
topButton.addEventListener('click', function(event) {
    scrollTo(top);
})

// Evento para ocultar sección de inicio y mostrar quiz.
startSection.addEventListener('click', function(event) {
    this.style = "display:none";
    quizForm.setAttribute('class', 'appearAni');
    quizForm.style = "display:''"
})

// Bucle para aplicar evento a cada input[radio]: cambiar background-color al hacer click (Verde = Correcto, Rojo = Incorrecto).
for (i = 0; i < radioButton.length; i++) {
    radioButton[i].addEventListener('click', function(event) {
        if (compare(this.value, rightAnswers) == true) {
            this.parentElement.style = 'background-color:#5ca904';
        } else {this.parentElement.style = 'background-color:#f00'}
    },)
}

// Bucle para aplicar evento con la función disableAll a cada pregunta por separado.
for (i = 0; i < rightAnswers.length; i++) {
    let question = document.getElementsByName('answer'+(i+1));
    for (j = 0; j < question.length; j++) {
        question[j].addEventListener('change', function(event) {
            if (this.checked) {
                disableAll(question);
            }
        })
    }
}

// Validación del formulario.
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    for (i = 0; i < rightAnswers.length; i++) {
        let question = document.getElementsByName('answer'+(i+1));
        if (question[0].checked) {
            answered += 1;
        } else if (question[1].checked) {
            answered += 1;
        } else if (question[2].checked) {
            answered += 1;
        } else if (question[3].checked) {
            answered += 1;
        } else {notAnswered += `${questionH2[i].innerHTML.slice(0,2)}\n`}
    }

    if (answered == rightAnswers.length) {
        let result = 0;

        for (i = 0; i < rightAnswers.length; i++) {
            let test = document.getElementsByName('answer'+(i+1))
            let value = '';
            for (j = 0; j < test.length; j++) {
                if (test[j].checked) {value = test[j].value;}
            }
            if (value == rightAnswers[i]) {
                result += 1;
                console.log('Right answer');
            } else {console.log('Wrong answer');}
        }
        document.querySelector('#result p').innerHTML = `${result} / 10`;
        scrollTo(top);
        quizForm.style = "display:none";
        resultSection.setAttribute('class', 'appearAni');
        resultSection.style = "display:''";
        
        } else {
            answered = 0;
            scrollTo(top);
            alert(`¡Error! No has respondido las preguntas: 
${notAnswered}`);
    }
    notAnswered = '';
});