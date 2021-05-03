function getName(node){
    return(node.name)
}

function headNode(node, collection){
    return (collection[node])
}

function next(node, collection){
    let nextAdd = node.next;
    return(collection[nextAdd])
}

function nodeAt(idx, head, collection){
    let node = headNode(head, collection);
    for (let i = 0; i < idx; i++){
        node = next(node, collection)
    }
    return node;
}

function addressAt(idx, head, collection){
    let node = headNode(head, collection);
    if (idx !== 0){
        let prevNodeIdx = idx -1;
        let prevNode = nodeAt(prevNodeIdx, head, collection)
        return (prevNode.next)
    } else {
        return (head)
    }
}

function indexAt(node, collection, head) {
    let idx = 0;
    let currentNode = headNode(head, collection);
    while (currentNode !== node) {
      idx += 1;
      currentNode = next(currentNode, collection);
    }
    return (idx);
}

function insertNodeAt(idx, newAdd, head, collection){
    let prevNode = nodeAt(idx - 1, head, collection);
    collection[newAdd]['next'] = prevNode['next']
    prevNode['next'] = newAdd
}

function deleteNodeAt(idx, head, collection){
    let prevNode = nodeAt(idx - 1, head, collection);
    let delNode = nodeAt(idx, head, collection);
    prevNode['next'] = delNode['next'];
    delNode['next'] = ''
}

