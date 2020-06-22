// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.
// Use requestAnimationFrame for any movement in a UI

function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsedTime = currentTime - start;
    const progress = elapsedTime / duration;
    const amountToMove = progress * distance;

    element.style.transform = `translateX(${ amountToMove }px)`;

    // if amount to move is less than distance, call function again
    if (amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}