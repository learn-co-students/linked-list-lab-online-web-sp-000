function getName(node) {
  return node.name;
}

const headNode = (linkedlist, collection) => {
  return collection[linkedlist];
}

function next(node, collection) {
    let nextNode = node.next;
    return collection[nextNode];
}

function nodeAt(index, linkedlist, collection) {
  let current = collection[linkedlist];
  for(let i = 0; i < index; i++) {
    current = next(current, collection)
  }
  return current;
}
function addressAt(index, linkedlist, collection) {
  if (index === 0) {
    return linkedlist
  } else {
    let node = nodeAt(index-1, linkedlist, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedlist) {
  let currentNode = collection[linkedlist];
  let currentIndex = 0;
  while(currentNode != node) {
    currentNode = next(currentNode, collection)
    currentIndex += 1;
  }
  return currentIndex;
}

function insertNodeAt(index, newNodeAddress, linkedlist, collection) {
  let prevNode = nodeAt(index - 1, linkedlist, collection);
  let prevNodeIndex = indexAt(prevNode, collection, linkedlist);
  let prevNodeAddress = addressAt(prevNode, linkedlist, collection);

  let currentNode = nodeAt(index, linkedlist, collection);
  let currentNodeIndex = indexAt(currentNode, collection, linkedlist);
  let currentNodeAddress = addressAt(currentNode, linkedlist, collection);

  prevNode.next = newNodeAddress
  let newNode = collection[newNodeAddress];
  newNode.next = currentNodeAddress
}

function deleteNodeAt(index, linkedlist, collection) {
  let prevNode = nodeAt(index - 1, linkedlist, collection);
  let current = nodeAt(index, linkedlist, collection);

  // for(let i = 0; i < index; i++) {
  //   prevNode = current;
  //   current = next(current, collection);
  // }
  prevNode.next = current.next;
}
