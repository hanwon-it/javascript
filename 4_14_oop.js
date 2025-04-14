const greeter = {
  names: ["김사과", "반하나", "오렌지", "이메론"],
  greetKim: function () {
    for (let name of this.names) {
      if (name.startsWith("김")) {
        console.log("안녕하세요, " + name + "님");
      }
    }
  },
};

greeter.greetKim();
