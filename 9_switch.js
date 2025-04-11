// let mbti = "ISFP";

// switch (mbti) {
//   case "ENFP":
//     console.log("열정 가득! 사람들과 어울리는 걸 좋아하는 아이디어 뱅크!");
//     break;
//   case "ISFJ":
//     console.log("조용하지만 깊은 통찰력! 사람들을 도와주는 조용한 리더!");
//     break;
//   case "ISTJ":
//     console.log("원칙과 계획을 중시하는 믿음직한 현실주의자!");
//     break;
//   case "ENTJ":
//     console.log("리더쉽이 뛰어나고 목표 지향적인 전략가!");
//     break;
//   default:
//     console.log("아직 등록되지 않은 MBTI입니다");
// }

const month = 1;
/*
if (month == 1) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 2) {
  console.log(`${month}월의 마지막 일자는 28일입니다`);
} else if (month == 3) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 4) {
  console.log(`${month}월의 마지막 일자는 30일입니다`);
} else if (month == 5) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 6) {
  console.log(`${month}월의 마지막 일자는 30일입니다`);
} else if (month == 7) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 8) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 9) {
  console.log(`${month}월의 마지막 일자는 30일입니다`);
} else if (month == 10) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 11) {
  console.log(`${month}월의 마지막 일자는 30일입니다`);
} else if (month == 12) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
}
*/

/*
if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  console.log(`${month}월의 마지막 일자는 31일입니다`);
} else if (month == 2) {
  console.log(`${month}월의 마지막 일자는 28일입니다`);
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
  console.log(`${month}월의 마지막 일자는 30일입니다`);
}
*/

switch (month) {
  case 1:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 2:
    console.log(`${month}월의 마지막 일자는 28일입니다`);
    break;
  case 3:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 4:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
  case 5:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 6:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
  case 7:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 8:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 9:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
  case 10:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 11:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
  case 12:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
}

switch (month) {
  case 1:
  case 3:
  case 5:
  case 8:
  case 10:
  case 12:
    console.log(`${month}월의 마지막 일자는 31일입니다`);
    break;
  case 2:
    console.log(`${month}월의 마지막 일자는 28일입니다`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${month}월의 마지막 일자는 30일입니다`);
    break;
}
