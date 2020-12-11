function getName(node) {
    return node['name'];
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    let nextNode = head['next'];
    return collection[nextNode];
}

function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList];

    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }

    return node;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection);
        return node['next'];
    }
}

function indexAt(node, collection, linkedList) {
    let index = 0; 

    while (node != nodeAt(index, linkedList, collection)) {
        index = index +=1;
    }

    return index
}

function insertNodeAt(index, address, linkedList, collection) {
    let newNode = collection[address];
    let originalNodeAddress = addressAt(index, linkedList, collection);
    let previousNode = nodeAt(index - 1, linkedList, collection);

    newNode['next'] = originalNodeAddress;
    previousNode['next'] = address;
}

function deleteNodeAt(index, linkedList, collection) {
    let deletedNodeAddress = nodeAt(index, linkedList, collection)['next'];
    let previousNode = nodeAt(index - 1, linkedList, collection);

    previousNode['next'] = deletedNodeAddress;
}
