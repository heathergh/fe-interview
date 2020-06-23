/*
  We have two identical DOM trees, A and B. For DOM tree A, we have
  the location of an element. Create a function to find that same element
  in tree B.
*/

function reversePath(element, root) {
  const path = [];
  let currentNode = element;

  while (currentNode.parentNode) {
    // gets first step in path
    const index = [...currentNode.parentNode.children].indexOf(currentNode);
    path.push(index);

    currentNode = currentNode.parentNode;
  }

  currentNode = root;

  while (path.length) {
    // goes back down tree
    currentNode = currentNode.children[path.pop()];
  }

  return currentNode;
}
