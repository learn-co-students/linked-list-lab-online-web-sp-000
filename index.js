function getName(node) {
    return node.name;
}

function headNode(key, collection) {
    return collection[key];
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(idx, head, collection) {
    let currentNode = collection[head];
    for (let i = 0; i < idx; i++) {
        currentNode = next(currentNode, collection);
    }
    return currentNode;
}

function addressAt(idx, key, collection) {
    let addr = key;
    for (let i = 0; i < idx; i++) {
        addr = collection[key].next;
    }
    return addr;
}

function indexAt(node, collection, head) {
    let currentNode = collection[head];
    for (let i = 0; currentNode.name; i++) {
        if (currentNode.name === node.name) {
            return i;
        } else {
            currentNode = next(currentNode, collection);
        }
    }
    return -1;
}

function insertNodeAt(idx, key, head, collection) {
    let headNode = collection[head];
    const newNode = collection[key];
    const prevNode = nodeAt(idx-1, head, collection);
    newNode.next = prevNode.next;
    prevNode.next = key;

}

function deleteNodeAt(idx, head, collection) {
    const prevNode = nodeAt(idx-1, head, collection);
    prevNode.next = collection[prevNode.next].next;
}