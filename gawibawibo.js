let user = "보";

const randex = Math.floor(Math.random() * 3) + 1;

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
