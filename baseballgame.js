// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//     - 숫자의 값과 위치가 모두 일치하면 S
//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.


// 랜덤한 3개 숫자 생성
// answer의 길이는 3미만이고  
// num은 Math.random()->난수생성, *10해서 최댓값 10으로지정, Math.floor()로 정수 출력
// answer이 아닌거에 num이 있으면 answer에 num을 더해주는거


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function random() { return Math.floor(Math.random() * 10) };

let randomArray = []

for (let i = 0; i < 3; i++) {                                      //randomArray에 random정수 3개 순서대로 push
    let randomInt = random();

    while (randomArray.includes(randomInt)) {
        ramdonInt = random();
    }
    randomArray.push(randomInt);
}

let count = 0;

console.log(`컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!`);


rl.on("line", (line) => {

    console.log(randomArray);

    let s = 0, b = 0;
    // 생성된 숫자와 입력된 숫자의 일치확인
    //randomArray 전체에 line[i]가 들어있는지?
    for (i in line) {                                           // 사용자의 인풋(line)을 한글자씩 for...in (index값 사용함)으로 돌림
        if (randomArray[i] == line[i]) s++;                      // 위치
        else if (randomArray.includes(Number(line[i]))) b++;     // 값 

    }

    console.log(`${s}S${b}B`);

    count++;

    if (s == 3) {           
        rl.close();
    }
});


rl.on('close', () => {                  //스트라이크 3이면 여기로 점프됨.
    console.log(count + '번 만에 맞히셨습니다.');
    console.log('게임을 종료합니다.');
    process.exit();                     //프로그램 종료
})