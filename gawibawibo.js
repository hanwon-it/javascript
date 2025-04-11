let user = "보";
// 1 ~ 3 사이에 숫자 발생하도록 설정
const randex = Math.floor(Math.random() * 3) + 1;

// 생성된 랜덤 숫자의 값이 맞는 if문으로 들어가고
// 그 값과 user의 값이 같은 if문의 경우를
// 찾아 승 패 무 결과 출력

// 발생한 랜덤 숫자와 user의 값이 모두 같을 경우 결과 출력
if (randex === 1) {
  console.log("컴퓨터는 가위를 선택했습니다");
  if (randex === 1 && user === "가위") {
    console.log("결과는 무승부입니다");
  } else if (randex === 1 && user === "바위") {
    console.log("결과는 플레이어 승입니다");
  } else {
    console.log("결과는 플레이어 패입니다");
  }
} else if (randex === 2) {
  console.log("컴퓨터는 바위를 선택했습니다");
  if (randex === 2 && user === "가위") {
    console.log("결과는 플레이어 패입니다");
  } else if (randex === 2 && user === "바위") {
    console.log("결과는 무승부입니다");
  } else {
    console.log("결과는 플레이어 승입니다");
  }
} else {
  console.log("컴퓨터는 보를 선택했습니다");
  if (randex === 3 && user === "가위") {
    console.log("결과는 플레이어 승입니다");
  } else if (randex === 3 && user === "바위") {
    console.log("결과는 플레이어 패입니다");
  } else {
    console.log("결과는 무승부입니다");
  }
}
