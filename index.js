function getName(node) {
    return node.name
}

function headNode(headAddress,linkedList) {
    return linkedList[headAddress]
}

function next(node, linkedList) {
    return linkedList[node.next]
}

function nodeAt(index, headAddress, linkedList) {
    let node = headNode(headAddress, linkedList)
    let i = 0;
    while(i < index) {
        node = next(node, linkedList)
        i++
    }
    return node
}

function addressAt(index, headAddress, linkedList) {
    if(index === 0) {
        return headAddress
    }
    let node = nodeAt(index - 1, headAddress, linkedList)
    return node.next
}

function indexAt(node, linkedList, headAddress) {
    let index = 0
    if(node.name === headNode(headAddress, linkedList).name) {
        return index;
    } else {
        index = 1
        while(nodeAt(index, headAddress, linkedList).name != node.name) {
            index += 1
        }
        return index
    }
}

function insertNodeAt(index, address, headAddress, linkedList) {
    let previousNode = nodeAt(index - 1, headAddress, linkedList);
    let nextNode = nodeAt(index, headAddress, linkedList);
    let nextNodeIdx = indexAt(nextNode, linkedList, headAddress)
    let nextNodeAddress = addressAt(nextNodeIdx, headAddress, linkedList)
    previousNode.next = address
    let newNode = linkedList[address]
    newNode.next = nextNodeAddress
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