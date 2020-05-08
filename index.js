function getName(node){
    // get name value of the node passed in
    return node.name
}

function headNode(linkedList, collection){
    //  returns head node of the passed in linked list.
    return collection[linkedList]
}

function next(node, collection){
    return collection[node.next]
}

function nodeAt(index, linkedList, collection){
    //until index is reached call next. 
    //once index is reached return that node
    let node = collection[linkedList]
    for (let i = 0; i < index; i++) {
        let newNode = next(node, collection)
        node = newNode
    }

    return node
}

function addressAt(index, linkedList, collection){
    //find node at index and return it's address
    let node = nodeAt(index, linkedList, collection)
    for (let address in collection) {
        if (collection[address] === node) {
            return address
        }
    }
}

// function indexAt(node, linkedList, collection){
//     let currentNode = headNode(linkedList, collection)
//     for (let i = 0; i < collection.length; i++) {
//         if (currentNode == node) {
//             return i
//         } else {
//             currentNode = next(currentNode, collection)
//         }
//     }
// }

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }

function insertNodeAt(index, addr, linkedList, collection) {
    // insert node at index
    // set address to the node that follows (previous nodes current next prop)
    // update previous node with new node address in next property

    let previousNode = nodeAt(index-1, linkedList, collection)
    collection[addr].next = previousNode.next
    previousNode.next = addr

}

function deleteNodeAt(index, linkedList, collection) {
    let nodeToDelete = nodeAt(index, linkedList, collection)
    let previousNode = nodeAt(index-1, linkedList, collection)
    previousNode.next = nodeToDelete.next
    nodeToDelete.next = null
}