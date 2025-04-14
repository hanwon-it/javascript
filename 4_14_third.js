const names = ["김사과", "반하나", "오렌지", "이메론"];

names
  .filter((name) => name.startsWith("오"))
  .forEach((name) => console.log("안녕하세요," + name + "님!"));
