// 재귀함수를 사용해서 회문 검색기 만들기

function isPalindrome(str, left = 0, right = null) {
  if (right === null) {
    right = str.length - 1;
  }

  if (left >= right) return true;
  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("역삼역"));
