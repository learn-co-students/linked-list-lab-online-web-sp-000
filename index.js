function getName(node) {
  return node.name;
}

function headNode(headPointer, collection) {
  return collection[headPointer];
}

function next(node, collection) {
  let nextNode = node.next;
  return collection[nextNode];
}

function nodeAt(index, pointer, collection) {
  let currentNode = headNode(pointer, collection);

  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, pointer, collection) {
  let address = pointer;

  for (let i = 0; i < index; i++) {
    address = collection[address].next;
  }
  return address;
}

function indexAt(node, collection, pointer) {
  let index = 0;
  let currentNode = headNode(pointer, collection);

  while (currentNode !== node) {
    index += 1;
    currentNode = next(currentNode, collection);
  }
  return index;
}

function insertNodeAt(index, newAddress, pointer, collection) {
  let previousNode = nodeAt(index - 1, pointer, collection);

  collection[newAddress].next = previousNode.next;
  previousNode.next = newAddress;
}

function deleteNodeAt(index, pointer, collection) {
  let previousNode = nodeAt(index - 1, pointer, collection);
  let nodeToDelete = nodeAt(index, pointer, collection);

  previousNode.next = nodeToDelete.next;
  nodeToDelete.next = "";
}
