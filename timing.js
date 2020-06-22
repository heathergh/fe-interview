/*
  Implement debounce

  setInterval()
  want something to happen every x amount of (milli)seconds

  setTimeout()
  want something to happen in x amount of (milli)seconds

  setTimeout and setInterval return an ID, which can be used in the function
*/

// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
// debounceFn();
function debounce(fn, time) {
  let setTimeoutId = null;

  return function() {
    // if setTimeoutId exists, then cancel whatever else (debounceFn()) was coming before it
    if (setTimeoutId) {
      return;
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      // clear setTimeoutId variable, so function fn executes
      setTimeoutId = null;
    }, time);
  }
}

debounce();
