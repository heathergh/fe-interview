// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

// arguments that promise takes are called an executor
const sleep = time => new Promise((resolve) => {
  setTimeout(()=>{
    resolve();
  }, time);
});
