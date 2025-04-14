class User {
  constructor(name) {
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  //setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("이메론");
console.log(user._name);
console.log(user.name); //getter의 기능
user.name = "반"; //setter
user.name = "반하나"; //setter
console.log(user.name); //getter
