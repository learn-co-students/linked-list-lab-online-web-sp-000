const getName = (node) => {
    return node.name
}

const headNode = (linkedList, collection) => {
    return collection[linkedList]
}

const next = (head, collection) => {
    let pointer = head.next
    return collection[pointer]
}

const nodeAt = (index, linkedList, collection) => {
    let node = headNode(linkedList, collection)
   for (let i = 0; i < index; i++) {
       node = next(node, collection)
   }
   return node
}

const addressAt = (index, linkedList, collection) => {
    if (index === 0) {
        return linkedList
    }
    return (nodeAt(index - 1, linkedList, collection)).next
}

const indexAt = (node, collection, linkedList) => {
    let idx = 0 
    if (node == collection[linkedList]) {
        return idx
    }
    for (let i=0; i < Object.keys(collection).length; i++) {
        idx++
        if (node == nodeAt(idx, linkedList, collection)) {
            return idx 
        }
    }
}

const insertNodeAt = (index, address, linkedList, collection) => {
    let precedingNode = nodeAt(index - 1, linkedList, collection)
    collection[address].next = precedingNode.next 
    precedingNode.next = address
    return linkedList
}

const deleteNodeAt = (index, linkedList, collection) => {
    let precedingNode = nodeAt(index - 1, linkedList, collection)
    let succeedingNodeAddress = addressAt (index + 1, linkedList, collection)
    precedingNode.next = succeedingNodeAddress
    nodeAt(index, linkedList, collection).next = ""
    return linkedList
}