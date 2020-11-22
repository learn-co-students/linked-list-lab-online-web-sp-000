function getName(node) {
  return node.name;
}
function headNode(linkedList, collection) {
  return collection[linkedList];
}
function next(head, collection) {
  return collection[head.next];
}
function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  console.log(`currentNode is ${JSON.stringify(currentNode)}`);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
    console.log(`currentNode is ${JSON.stringify(currentNode)}`);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection) {
  const node = nodeAt(index, linkedList, collection);
  for (const key in collection) {
    if (collection[key] === node) {
      return key;
    }
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  console.log(collection.length);
  let i = 0;
  for (const key in collection) {
    if (currentNode === node) {
      return i;
    }
    i++;
    currentNode = next(currentNode, collection);
  }
}

function insertNodeAt(index, address, linkedList, collection) {
  let newNode = collection[address];
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let existingAddress = addressAt(index, linkedList, collection);
  let previousAddress = addressAt(index - 1, linkedList, collection);
  newNode.next = existingAddress;
  previousNode.next = address;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  previousNode.next = nodeAt(index, linkedList, collection).next;
}
