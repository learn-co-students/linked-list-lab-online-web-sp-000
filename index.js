const getName = (node) => {
  
  return node.name
}

const headNode = (node, collection) => {
  let head = collection[node]
  return head
}

const next = (node, collection) => {
  let nextAddress = node.next 
  return collection[`${nextAddress}`]
}

const nodeAt = (index, linkedList, collection) => {
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }

  return currentNode;
}