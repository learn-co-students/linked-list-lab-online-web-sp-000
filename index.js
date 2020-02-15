function getName(node) {
  return node.name;
}

function headNode(firstKey, collection) {
  return collection[firstKey];
}

function next(node, collection) {
  let key = node.next;
  return collection[key];
}

function nodeAt(index, firstKey, collection) {
  let returnNode = headNode(firstKey, collection)
  for (let i = 0; i < index; i++) {
    returnNode = next(returnNode, collection);
  }
  return returnNode;
}

function addressAt(index, firstKey, collection) {
  let prevNode = nodeAt((index - 1), firstKey, collection);
  let address = index === 0 ? firstKey : prevNode.next;
  return address;
}

function indexAt(node, collection, firstKey) {
  let count = 0;
  let currentNode = collection[firstKey];
  while (currentNode.next !== node.next) {
    currentNode = next(currentNode, collection);
    count += 1;
  }
  return count;
}

function insertNodeAt(index, newAddress, firstKey, collection) {
  let prevAddress = addressAt((index - 1), firstKey, collection);
  let nextAddress = addressAt(index, firstKey, collection);

  collection[prevAddress].next = newAddress;
  collection[newAddress].next = nextAddress;
}

function deleteNodeAt(index, firstKey, collection) {
  let deleteNode = nodeAt(index, firstKey, collection);
  let deleteAddress = addressAt(index, firstKey, collection);
  let previous;
  let current = headNode(firstKey, collection);
  for (let i = 0; i < index; i++) {
    previous = current;
    current = next(current, collection);
  }
  previous.next = current.next;
}
