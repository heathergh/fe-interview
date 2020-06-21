/*
  Remove duplicate words from a string
*/
const testString = "Remove remove duplicate duplicate words words from this test test string";

const getUniqueSubstrings = (string) => {
  // if the value of the argument passed is not a string, exit the function
  if (typeof(string) !== 'string') return;

  // convert all words to lowercase
  const stringToArray = string.toLowerCase().split(' ');
  // instantiate set object containing only unique array values
  const uniqueSubstrings = new Set(stringToArray);
  // convert set object to array and join array elements with a space to convert it back into a string
  const uniqueString = [...uniqueSubstrings].join(' ');

  return uniqueString;
}

getUniqueSubstrings(testString);