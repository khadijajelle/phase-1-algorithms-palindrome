function isPalindrome(word) {
  // Remove non-alphanumeric characters and convert to lowercase
  word = word.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Loop through half of the word
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    // Compare characters from both ends
    if (word[i] !== word[word.length - i - 1]) {
      return false; // If any characters don't match, it's not a palindrome
    }
  }

  return true; // If all characters match, it's a palindrome
}

/* 
  Pseudocode:
  1. Clean the input word by removing non-alphanumeric characters and converting to lowercase.
  2. Loop through the first half of the cleaned word.
  3. Compare each character with the corresponding character from the end.
  4. If any characters don't match, return false.
  5. If all characters match, return true.
*/

/*
  Written explanation:
  The function first removes any non-alphanumeric characters from the input word and converts it to lowercase to ensure that the comparison is case-insensitive and ignores any punctuation or spaces. It then loops through the first half of the cleaned word and compares each character with the corresponding character from the end. If any characters do not match, it returns false, indicating that the word is not a palindrome. If all characters match, it returns true, indicating that the word is a palindrome.
*/

// You can run node index.js to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba")); // Expected true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // Expected true

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // Expected true

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // Expected false

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // Expected false
}

module.exports = isPalindrome;