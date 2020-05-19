function getName(node) {
    return node.name
}

function headNode(linkedlist,collection) {
    return collection[linkedlist]
}

function next(node, collection) {
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}

function nodeAt(index, linkedlist, collection) {
    let node = collection[linkedlist];
    for (let i = 0; i < index; i++) {
        node = next(node, collection);
    }
    return node
}

function addressAt(index, linkedlist, collection) {
    if (index === 0) {
        return linkedlist
    } else {
        let node = nodeAt(index-1, linkedlist, collection);
        return node.next
    }
}

function indexAt(node, collection, linkedlist) {
    let currentNode = collection[linkedlist];
    let index = 0;
    while (currentNode != node) {
        index++;
        currentNode = next(currentNode, collection)
    }
    return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
    let previousNode = nodeAt(index-1, linkedList, collection);
    let nextNode = nodeAt(index, linkedList, collection);
    let previousNodeIndex = indexAt(previousNode, collection, linkedList);
    let nextNodeIndex = indexAt(nextNode, collection, linkedList);  
    let previousNodeAddress = addressAt(previousNode, linkedList, collection);
    let nextNodeAddress = addressAt(newNode, linkedList, collection);

    previousNode.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = nextNodeAddress;
}

function deleteNodeAt(index, linkedList, collection) {
    let previousNode;
    let currentNode = collection[linkedList];
    for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next;
}