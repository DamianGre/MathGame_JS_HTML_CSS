let score = 0;
let timer = 0.0;
let correctAnswer;
let level = 1;
let time = 0;

const button = document.querySelector('button');


function generateEquation(){
    const number1 = Math.floor(Math.random() * 10 * level) + 1;
    const number2 = Math.floor(Math.random() * 10 * level) + 1;

    operators = ['+', '-', '*', '/'];
    const operator =  operators[Math.floor(Math.random() * operators.length)];
    let equation = number1 + " " + operator + " " + number2 + " =?";
    document.getElementById("equation").innerText = equation;

    switch(operator){
        case '+':
            correctAnswer = Number(number1) + Number(number2)
                break;
        case '-':
            correctAnswer = Number(number1) - Number(number2)
                break;
        case '*':
            correctAnswer = Number(number1) * Number(number2)
                break;
        case '/':            
            correctAnswer = Number(number1) / Number(number2)      
                break;
    }

    if(!Number.isInteger(correctAnswer) || correctAnswer < 0){
        generateEquation();
    }   
}

function checkAnswer(){
    const answer = Number(document.getElementById("answer").value)
    if(answer === correctAnswer){
        score++;
        document.getElementById("score").innerText = score;

        if(score > level * 10){
            level += 1;
            document.getElementById("level").innerText = level;
        }

        generateEquation();
        document.getElementById("answer").value = "";
    }else{
        alert("Wrong answer Try again!\nSCORE -1 !!!!!");
            score--;
            document.getElementById("score").innerText = score;
        document.getElementById("answer").value = "";
    }
}

function startTimer(){
    time = 0;
    timer = setInterval(() => {
        time++;
        document.getElementById("time").innerText = time;
    }, 1000);
}

generateEquation();
startTimer();
button.addEventListener('click', checkAnswer);
document.getElementById("answer").addEventListener('keyup', function(e){
    if (e.key === "Enter"){        
        checkAnswer()
    }        
  });


