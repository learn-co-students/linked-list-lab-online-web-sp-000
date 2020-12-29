function getName(node) {
    return node["name"]
}

function headNode(node, collection) {
    return collection[node]
}

function next(node, collection) {
    let nextAddress = node["next"];
    return collection[nextAddress]
}

function nodeAt(index, head, collection) {
    let node = collection[head]; 

    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }

    return node;
}

function addressAt(index, head, collection) {

    if (index === 0) {
        return head;
    } else {
        let previousNodeIndex = index - 1; 

        let prevNode = nodeAt(previousNodeIndex, head, collection);

        return prevNode["next"]
    }
}

function compareNodes(headNode, nodeTwo, collection, counter) {
    if (headNode === nodeTwo) {
        return counter;
    } else {
        counter = counter + 1;
        headNode = next(headNode, collection)
        return compareNodes(headNode, nodeTwo, collection, counter)
    }
}

function indexAt(node, collection, head) {
    let counter = 0;
    let firstNode = collection[head];

    return compareNodes(firstNode, node, collection, counter)
}

function insertNodeAt(index, nodeAddressToInsert, head, collection) {
    // find node address 
    let nextAddress = addressAt(index, head, collection);

    let prevNode = nodeAt(index - 1, head, collection);
    prevNode["next"] = nodeAddressToInsert;

    collection[nodeAddressToInsert]["next"] = nextAddress;
}

function deleteNodeAt(index, head, collection) {
    let node = nodeAt(index, head, collection);
    let nextAddress = node["next"]

    let previousNode = nodeAt(index - 1, head, collection);
    previousNode["next"] = nextAddress;

}