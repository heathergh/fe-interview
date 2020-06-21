// Implement Function.prototype.bind()

/*
  const foo = function() {
      console.log(this.bar);
  }
  let baz = foo.bind({bar: 'hello'})

  baz(); // Hello

  if you need to return a function that will be invoked later
  or you see a pattern like the one above, you know that the function returns a function
*/

// bind(fn, context);
// we're trying to return a function that has a different context
Function.prototype.bind = function(context) {
  // this is the function itself, so we don't need to pass it in like we would for bind's first arg
  const fn = this;

  return function() {
    fn.call(context)
  }
}

// another way to do it:
function bind(fn, context) {
  return function() {
    fn.call(context)
  }
}

// another way to do it, if you want to pass arguments:
function bind(fn, context) {
  return function() {
    fn.apply(context, [...arguments]);
  }
}
