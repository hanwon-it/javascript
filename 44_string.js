const str1 = "안녕하세요 javascript";
const str2 = new String("안녕하세요 javascript");
console.log(str1);
console.log(str2);
console.log(str1 == str2); // true
console.log(str1 === str2); // false

// length: 문자열의 길이를 저장하는 방법
console.log(str1.length);

// indexOf(): 특정 문자나 문자열이 처음으로 등장하는 위치를 인덱스로 반환
console.log(str1.indexOf("j")); // 대소문자를 구분해줘야 하며
console.log(str1.indexOf("java")); // -1이 나온다면 찾기 못했다는 뜻

// chatAt(): 특정 문자열에서 전달받은 인덱스에 위치한 문자를 반환
console.log(str1.charAt(7)); // 인덱스 7번자리인 a 출력

// includes(): 특정 문자열에서 전달받은 문자열이 포함되어 있는지 여부를 반환
console.log(str1.includes("java")); // 이것 또한 대소문자 구분이 되어야한다

// substring(): 전달 받은 시작 인덱스로부터 종료 인덱스 직전까지의 문자열을 추출
console.log(str1.substring(6)); // 6번째 자리부터 출력
console.log(str1.substring(6, 10)); //범위지정하면 인덱스 6번부터 9번까지 출력

// replace(): 원본 문자열의 일부를 전달 받은 문자열로 치환
console.log(str1.replace("안녕하세요", "HELLO"));

// split(): 구분자를 기준으로 나눈 후 나뉜 문자열을 하나의 배열에 저장
const str3 = "김사과,오렌지,반하나,이메론,배애리";
const students = str3.split(",");
console.log(students);
for (let i in students) {
  console.log(i, students[i]);
}

// trim(): 문자열의 앞 뒤 공백을 제거
const str4 = "    Javascript    ";
console.log(`ㅁ${str4.trim()}ㅁ`);

// toUpperCase() toLowerCase() : 문자열을 대, 소문자로 변환
console.log(`ㅁ${str4.trim().toLowerCase()}ㅁ`);
console.log(`ㅁ${str4.trim().toUpperCase()}ㅁ`);
