// Variables document
const startSection = document.getElementById('startSection');
const quizForm = document.getElementById('quizForm');
const resultSection = document.getElementById('resultSection');
const restart = document.getElementById('restart');
const questions = document.querySelectorAll('#quizForm h2');
const radioButton = document.getElementsByClassName('radioButton');

// Variables respuestas
const quizAnswers = [1, 0, 0, 3, 2, 0, 2, 1, 3, 2];
const rightAnswers = ['answer1b', 'answer2a', 'answer3a', 'answer4d', 'answer5c', 'answer6a', 'answer7c', 'answer8b', 'answer9d', 'answer10c']
let notAnswered = [];



// Funciones
// Función para botón que devuelva al principio de la página.
function backToTop() {
    scrollTo(top);
}

// Función para validar que cada pregunta tenga respuesta?
function checked(input) {
    for (i = 0; i < input.length; i++) {
        if (this.checked && input[i].name == `answer${i+1}`) {
            return true;
        }
        notAnswered.push();
    }
    return false;
}

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

// Evento para ocultar sección de inicio a quiz.
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

    if (checked(radioButton) != false) {
        let result = 0;
        for (i = 0; i < quizAnswers.length; i++) {
            let answer = document.getElementsByName(`answer${i+1}`);
            if (answer[quizAnswers[i]].checked) {
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
        scrollTo(top);
        alert(`¡Error! No has respondido las preguntas: 
                ${notAnswered}`);
    }
});