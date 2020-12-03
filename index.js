let collection = {
    rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: 'ntrandmA'},
    ntrandmA: {name: 'Daniel', next: 'ntrandmB'},
    ntrandmB: {name: 'Bonnie', next: null},
}

function getName(node) {
    return node['name'];
}

function headNode(linkedList, collection) {
    return collection[linkedList];
}

function next(head, collection) {
    return collection[head['next']];
}

function nodeAt(index, linkedList, collection) {
    let node = collection[linkedList];

    for (let i = 0; i < index; i++) {
        node = next(node, collection);
    }

    return node;
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {return linkedList;}

    return nodeAt(index-1, linkedList, collection)['next'];
}

function indexAt(node, collection, linkedList) {
    let currentNode = collection[linkedList];

    let index = 0;

    while (node !== currentNode) {
        currentNode = next(currentNode, collection);
        index += 1
    }

    return index;
}

function insertNodeAt(index, address, linkedList, collection) {
    if (index === 0) {
        collection[address]['next'] = linkedList;
    } else {
        let previousNode = nodeAt(index-1, linkedList, collection);
        collection[address]['next'] = previousNode['next'];
    
        previousNode['next'] = address;
    }

    return address;
}


function deleteNodeAt(index, linkedList, collection) {
    if (index === 0) {collection[linkedList]['next'] === null; return linkedList;};

    let previousNode = nodeAt(index-1, linkedList, collection);
    let node = nodeAt(index, linkedList, collection);
    let nodeAddress = previousNode['next'];

    previousNode['next'] = node['next'];
    node['next'] = null;

    return nodeAddress;
}