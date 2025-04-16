// function sendit() {
//   const userid = document.getElementById("userid");
//   const userpw = document.getElementById("userpw");
//   const userpw_re = document.getElementById("userpw_re");
//   const name = document.getElementById("name");
//   const hp = document.getElementById("hp");
//   const expIdtext = /^[A-Za-z0-9]{4,20}$/;
//   const exppwtext =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
//   const expNameText = /^[가-힣]+$/;
//   const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;

//   if (userid.value === "") {
//     alert("아이디를 입력해주세요");
//     userid.focus();
//     return false;
//   }

//   if (!expIdtext.test(userid.value)) {
//     alert("아이디는 4자이상20자이하 영문자와 숫자만 사용");
//     userid.focus();
//     return false;
//   }

//   if (!exppwtext.text(userpw.value)) {
//     alert(
//       "비밀번호는 8자이상 20자 이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다."
//     );
//     userpw.focus();
//     return false;
//   }

//   if (userpw.value != userpw_re.value) {
//     alert("비밀번호 불일치");
//     userpw_re.focus();
//     return false;
//   }

//   if (!expNameText.test(name.value)) {
//     alert("이름은 한글로 입력하세요.");
//     name.focus();
//     return false;
//   }

//   if (!expHpText.test(hp.value)) {
//     alert("휴대폰 번호 형식이 일치하지 않습니다.\n-하이픈을 입력하세요");
//     name.focus();
//     return false;
//   }
//   return true;
// }

function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expssn1 = /^\d{6}$/;
  const expssn2 = /^\d{7}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자이상 20자이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }
  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }
  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }
  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }
  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력하세요!");
    hp.focus();
    return false;
  }

  //주민번호관련
  document.getElementById("gumsa").addEventListener("click", function () {
    const ssn1 = document.getElementById("ssn1");
    const ssn2 = document.getElementById("ssn2");
    const weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    let sum = 0;

    if (!expssn1.test(ssn1.value) || !expssn2.test(ssn2.value)) {
      alert("주민번호 형식에 맞춰 입력하세요");
      return false;
    }
  });
  const ssnS = ssn1 + ssn2.substring(0, 6);
  for (let i = 0; i < ssnS.length; i++) {
    sum += parseInt(ssnS[i]) * weight[i];
  }
  const remain = (11 - (sum % 11)) % 10;
  const last = parseInt(ssn2[6]);
  if (remain === last) {
    alert("유효함");
    return true;
  } else {
    alert("유효한 번호가 아님");
    return false;
  }

  return true;
}
