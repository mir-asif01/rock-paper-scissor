const userWin = document.getElementById('user');
userWin.style.display = 'none';

const computerWin = document.getElementById('computer')
computerWin.style.display = 'none';

const draw = document.getElementById('draw');
draw.style.display = 'none';

const instruction = document.getElementById('ins')

let computerChoiceId = document.getElementById('cp-choice');
let userChoiceId = document.getElementById('user-choice')

let randomChoiceArr = ['rock','paper','scissor','rock','paper','scissor']
let randomNumber = Math.floor(Math.random(0,2)*7)
let computerChoice = (randomChoiceArr[randomNumber])
// let computerChoice = (randomChoiceArr[1])
// console.log(computerChoice)


function getBtnValue(e){
    let userSelection = (e.value);
    if(userSelection===computerChoice){
        computerChoiceId.innerHTML = `<p>Computer choosed : <i><b>${computerChoice}</i></b></p>`;
        userChoiceId.innerHTML = `<p>You choosed : <i><b>${userSelection}</i></b></p>`;
        draw.style.display = 'block';
        instruction.style.display = 'none';
    }
    if((userSelection==='rock' && computerChoice==='paper') || (userSelection==='paper' && computerChoice==='scissor') || (userSelection==='scissor' && computerChoice==='rock')){
        computerChoiceId.innerHTML = `<p>Computer choosed : <i><b>${computerChoice}</i></b></p>`;
        userChoiceId.innerHTML = `<p>You choosed : <i><b>${userSelection}</i></b></p>`;
        computerWin.style.display = 'block';
        instruction.style.display = 'none'
    }
    if((userSelection==='rock' && computerChoice==='scissor')||(userSelection==='paper' && computerChoice==='rock')||(userSelection==='scissor' && computerChoice==='paper')){
        computerChoiceId.innerHTML = `<p>Computer choosed : <i><b>${computerChoice}</i></b></p>`;
        userChoiceId.innerHTML = `<p>You choosed : <i><b>${userSelection}</i></b></p>`;
        userWin.style.display = 'block';
        instruction.style.display = 'none'
    }
}