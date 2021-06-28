function getName(node) {
    return node.name
}

function headNode(list, collection) {
    return collection[list]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       currentNode = next(currentNode, collection);
    }
  
    return currentNode;
}

function addressAt(index, list, collection) {
    if(index == 0){
        return list
    } else {
        let node = nodeAt(index-1, list, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }
  
  
  function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
  
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }
  
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }