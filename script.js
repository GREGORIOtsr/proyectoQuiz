const startSection = document.getElementById('startSection');
const quizForm = document.getElementById('quizForm');
const resultSection = document.getElementById('resultSection');
const restart = document.getElementById('restart');

function backToTop() {
    scrollTo(top);
}

function formSumbit() {
    scrollTo(top);
    quizForm.style = "display:none";
    resultSection.setAttribute('class', 'appearAni');
    resultSection.style = "display:''";
}

startSection.addEventListener('click', function(event) {
    this.style = "display:none";
    quizForm.setAttribute('class', 'appearAni');
    quizForm.style = "display:''"
})

restart.addEventListener('click', function(event) {
    resultSection.style = "display:none";
    startSection.setAttribute('class', 'appearAni');
    startSection.style = "display:''"
})

/* const radioButton = document.getElementsByClassName('radioButton');
const arrow = document.getElementsByClassName('selectArrow');
for (i = 0; i < radioButton.length; i++) {
    radioButton[i].addEventListener('toggle', function(event) {
        if (this.checked) {
            arrow.setAttribute('class', 'show');
        } else if (this.checked == false) {
            arrow.removeAttribute('class', 'show');
        }
    })
} */

const quizAnswers = [1, 0, 0, 3, 2, 0, 2, 1, 3, 2];
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let result = 0;

    for (i = 0; i < quizAnswers.length; i++) {
        let answer = document.getElementsByName(`answer${i+1}`);
        if (answer[quizAnswers[i]].checked) {
            result += 1;
            console.log('Right answer');
        } else {console.log('Wrong answer');}
    }

    document.querySelector('#result p').innerHTML = `${result} / 10`;
});