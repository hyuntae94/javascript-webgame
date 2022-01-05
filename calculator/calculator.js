let numOne = "";
let numTwo = "";
let operator = "";

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    if (!operator){
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return ;
    }
    //아래코드는 operator가 있을 경우에만 실행
    if (!numTwo){
        $result.value ="";
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}

const onClickOperator = (op) => () => {
    if (numOne){
        operator = op;
        $operator.value += op;
    } 
    else{
        alert('숫자를 먼저 입력하세요!');
    }
    
}

//숫자(0~9)
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
//연산자
document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click',onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('x'));
//나머지
document.querySelector('#clear').addEventListener();
document.querySelector('#calculate').addEventListener();