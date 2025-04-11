// let fruits = ["사과", "바나나", "오렌지"];
// for (let i=0;i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

/*
for (let fruit of fruits) {
  console.log(fruit);
}
*/

/*
fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 파일: ${fruit}`);
});
*/

let user = [1, "apple", "김사과", 20, "서울 서초구"];

//for 문
for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}
console.log("------------");

//for...of
for (let users of user) {
  console.log(users);
}
console.log("---------------");

//forEach
user.forEach(function (users, idx, arr) {
  console.log(users, idx, arr);
});
