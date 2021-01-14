function getName(node) {
  return node["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  let nextAddress = node["next"]
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let head = headNode(linkedList, collection)
  // console.log(head)
  let currentNode = head;
  if (index === 0) {
    return currentNode
  } else {
    for (let i = 0; i < index; i++) {
      currentNode = next(currentNode, collection)
    }
    return currentNode
  }
}

function addressAt(index, linkedList, collection) {
  // console.log(index)
  if (index === 0) {
    return linkedList
  } else {
    index -= 1
    let node = nodeAt(index, linkedList, collection)
    return node["next"]
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList]
  let index = 0
  while (currentNode !== node) {
    currentNode = next(currentNode, collection)
    index++
  }
  return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let bigObject = collection[linkedList]
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index + 1, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress

}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  // ? currentNode is node to be deleted, right? 
  previousNode.next = currentNode.next
}

