function isPalindrome(str) {
  // Convert the string to lowercase to make it case-insensitive
  const normalizedStr = str.toLowerCase();
  // Reverse the string and compare it with the original
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
