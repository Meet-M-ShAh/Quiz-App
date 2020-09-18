const QuizData = [
    {
        question: 'OS computer abbreviation usually means ?',
        a: 'Order of Significance',
        b: 'Open Software',
        c: 'Operating System',
        d: 'Optical Sensor',
        correct: 'c'
    },

    {
        question: '.MOV extension refers usually to what kind of file?',
        a: 'Image file',
        b: 'Animation/movie file',
        c: 'Audio file',
        d: 'MS Office document',
        correct: 'b'
    },

    {
        question: 'Who developed Yahoo?',
        a: 'Dennis Ritchie & Ken Thompson',
        b: 'David Filo & Jerry Yang',
        c: 'Vint Cerf & Robert Kahn',
        d: 'Steve Case & Jeff Bezos',
        correct: 'b'
    },

    {
        question: 'Full form of URL is?',
        a: 'Uniform Resource Locator',
        b: 'Uniform Resource Link',
        c: 'Uniform Registered Link',
        d: 'Unified Resource Link',
        correct: 'a'
    },

    {
        question: 'The rules of a language is known as ____',
        a: 'Code',
        b: 'Structure',
        c: 'Procedure',
        d: 'Syntax',
        correct: 'd'
    }

]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = QuizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected()
{
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if(answer)
    {
        if(answer === QuizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < QuizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You have answered ${score} out of ${QuizData.length} questions correctly.</h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
});