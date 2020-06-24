// palindrome


function isStringPalindrome(word) {
  if (typeof(word) !== 'string') return;

  const reversedWord = word.split('').reverse().join('');

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}