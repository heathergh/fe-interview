/*
  Flatten an array without using .flat() or .flatMap()
*/

const exampleArray = [1,2,[3, 4, [5, 6, 7], 8], 10];

const flatten = (array) => {
  return array.reduce((results, currentValue) => {
    // check if currentValue is a number or an array
    if (Array.isArray(currentValue)) {
      // If it's an array, use this function to flatten it and then concatenate it to the currentValue array
      results = results.concat(flatten(currentValue));
    } else {
      results.push(currentValue);
    }

    return results;
  }, []);
}

flatten(exampleArray);

/*
  What stepping through this function invocation looks like:
    -> first results array, push currentValue (1) = [1]
    -> first results array, push currentValue (2) = [1, 2]

      Next element is an array, invoke flatten function:
      -> second results array, push currentValue (3) = [3]
      -> second results array, push currentValue (4) = [3, 4]

        Next element is an array, invoke flatten function:
        -> third results array,  push currentValue (5) = [5]
        -> third results array, push currentValue (6) = [5, 6]
        -> third results array, push currentValue (7) = [5, 6, 7]

      -> second results array concat third results array = [3, 4] + [5, 6, 7]
      -> second results array = [3, 4, 5, 6, 7]
      -> second results array, push currentValue (8) = [3, 4, 5, 6, 7, 8]
    -> first results array + second results array = [1, 2] + [3, 4, 5, 6, 7, 8]
      -> first results array = [1, 2, 3, 4, 5, 6, 7, 8]
  -> first results array, push currentValue (10) = [1, 2, 3, 4, 5, 6, 7, 8, 10]
  -> return results =  [1, 2, 3, 4, 5, 6, 7, 8, 10]
*/