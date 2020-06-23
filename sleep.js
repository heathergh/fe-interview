// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

const sleep = time => new Promise((resolve) => {
  setTimeout(()=>{
    resolve();
  }, time);
});
