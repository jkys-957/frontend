const $form = document.querySelector('#form');
const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');
// console.log($form);
// console.log($result);
// console.log($bonus);

const setTimeoutPromise = (ms) => new Promise((resolve, reject) =>  {
    setTimeout(resolve, ms);
});

let clickable = true;   //추첨 시 버튼 통제
$form.addEventListener('submit', async (event) => { // 변수명은 event일 필욘 없다.
    event.preventDefault();
    if(!clickable) {
        console.log('false');
        return;
    }
    clickable = false;
    // console.log('ok');
    $result.innerHTML = '당첨 숫자 : ';
    $bonus.innerHTML = '보너스 숫자 : ';
    const string = event.target.input.value;
    if(!string.trim()) {
        alert('숫자를 입력하세요.');
        //event.target.input.value = '';
    return; // return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             은 값을 돌려주는 의미도 있고, 로직을 멈추는 의미도 있다.
    }
    const myNumbers = string.split(',').map( (v) => Number(v.trim()) );
    // for(let i=0; i < 6; i++){
    //     let tmp = Number(myNumbers[i].trim());
    //     console.log(typeof(tmp));
    // }
    // console.log(myNumbers);
    // console.log(typeof(myNumbers));
    
    if(myNumbers.length !== 6) 
        return alert('현재' + myNumbers.length + '갯수의 숫자를 입력했습니다.\n숫자를 6개 입력하세요.')
    if(new Set(myNumbers).size !== 6)
        return alert('중복된 숫자가 있습니다.')
    myNumbers.find((v) => {console.log(v); true});
    if(myNumbers.find( (v) => v > 45 || v < 1))  // 0 검사가 안돼
    // if(myNumbers.find( (v) => v !== undefined || (v > 45 || v < 1)))
        return alert('1부터 45까지만 입력하세요.');
    const candidate = Array(45).fill().map( (v, i) => i + 1)
    // 45개의 숫자 (위에 방법으로 고침)
    // for(let i = 1; i <= 45; i++) {
    //     candidate[i-1] = i;
    // }
    // console.log(candidate);
    const shuffle = [];
    //for(let i = 0; i < candidate.length; i++) {
    while(candidate.length > 0) {
        const random = parseInt(Math.random() * candidate.length);
        //const random = Math.floor(Math.random() * candidate.length);
        const spliceArray = candidate.splice(random, 1);
        const value = spliceArray[0];
        shuffle.push(value);
    }
    const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);  // slice 는 미만으로 적용된다.
    const bonus = shuffle[6];
    for(let i = 0; i < winBalls.length; i++) {
        await setTimeoutPromise(1000);
        console.log('당첨번호~~ : ' + winBalls[i]);
        drawBall(winBalls[i], $result);
    }
    await setTimeoutPromise(1000);
    console.log('보너스 번호~~ : ' + bonus);
    drawBall(bonus, $bonus);
}); // 맨 마지막에는 clickable를 true 설정 해야 한다!!!

function drawBall(number, $parent) {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.style.backgroundColor = 'red'; // 내일부터
}