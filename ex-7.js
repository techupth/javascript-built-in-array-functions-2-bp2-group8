function isPalindrome(string) {
  // Start coding here
  let stringReverse = string.split('').reverse().join('')
  console.log(stringReverse);
  if(string === stringReverse){
    return true
  }else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

