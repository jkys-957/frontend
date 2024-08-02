let startTime;
let endTime;
const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
const records = [];
$screen.addEventListener('click', ()=> {
    //console.log($screen.classList.contains('waiting'));
    if($screen.classList.contains('waiting')) {
       $screen.classList.replace('waiting', 'ready');
       $screen.textContent = '그린옐로우색이 돼면 클릭하세요.';
       timeoutId = setTimeout(() => {
            startTime = new Date();
            $screen.classList.replace('ready', 'now');
            $screen.textContent = '클릭하세요!!!';
        }, Math.floor(Math.random() * 1000) + 2000);
    console.log(Math.floor(Math.random() * 1000) + 2000);
    } else if($screen.classList.contains('ready')) {
        clearTimeout(timeoutId);
        $screen.classList.replace('ready', 'waiting');
        $screen.textContent = '너무 성급!! 자 다시~';
    } else if($screen.classList.contains('now')) {
        console.log('게임 시작');
        endTime = new Date();
        const current = endTime - startTime;    //반응속도
        records.push(current);
        const average = records.reduce((p, c) => p + c) / records.length;
        $result.textContent = `현재 ${current}ms, 평균 ${average}ms`;    
        // records.forEach((top, index) => {
        //     $result.append(
        //         document.createElement('br'), `${index + 1} : ${top}`
        //     );
        // });
        const topFive = records.sort((p, c) => p - c).slice(0, 5);
        topFive.forEach((top, index) => {
            $result.append(
                document.createElement('br'), `${index + 1} : ${top}`
            );
        });

        startTime = '';
        endTime = '';
        $screen.classList.replace('now', 'waiting');
        $screen.textContent = '클릭해서 테스트를 시작하세요.';
    }
});



