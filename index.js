const getName = (node) => {
  return node.name;
}

const next = (node, collection) => {
  let nextAddress = node.next; 
  return collection[`${nextAddress}`]
}

const addressAt = (index, linkedList, collection) => {
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const nodeAt = (index, linkedList, collection) => {
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }
  return currentNode;
}



const indexAt = (node, collection, linkedList) => {
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0
  while(currentNode != node){
    currentIdx++
    currentNode = next(currentNode, collection)
  }
  return currentIdx
}

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let previousNodeIdx = indexAt(previousNode, collection, linkedList)
  let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}

const deleteNodeAt = (index, linkedList, collection) => {
  let previousNode;
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     previousNode = currentNode
     currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next
}