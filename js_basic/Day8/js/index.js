//console.log('hi');
let numOne = '';
let operator = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// console.log($operator);
// console.log($result);

const onClickNumber = (event) => {
    //console.log(event.target.textContent);
    let number = event.target.textContent;
    if(!operator) {
        // console.log('true');
        numOne = number;
    } else {
        // console.log('false');
        numTwo = number;
    }
    console.log('numOne : ' + numOne);
    console.log('numTwo : ' + numTwo);
}

const onClickOperator = (op) => {
    if(!numOne){
        alert('숫자를 먼저 입력하세요.')
    } else if(numTwo) {
        $operator.value = op;
        operator = op;
        onClickCalculate();
    } else {
        operator = op;
        $operator.value = op;
    }
    console.log(op);
}

const onClickCalculate = () => {
    if(numTwo) {
        switch(operator){
            case '+':
                $result.value = Number(numOne) + Number(numTwo);
                break;
            case '-':
                $result.value = Number(numOne) - Number(numTwo);
                break;
            case '/':
                $result.value = Number(numOne) / Number(numTwo);
                break;
            case '*':
                $result.value = Number(numOne) * Number(numTwo);
                break;
        }
    } else {
        alert("숫자를 먼저 입력하거나 연산자를 입력하세요.");
    }
    // console.log('계산');
}

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
document.querySelector('#plus').addEventListener('click', () => onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', () => onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', () => onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', () => onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', onClickCalculate);
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    op = '';
    numTwo = '';
    $operator.value = '';
    $result.value = '';
//    console.log('클리어');
});
