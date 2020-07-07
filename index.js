function getName(node) {
  return node["name"]
}

function headNode(headValue, collection) {
  return collection[headValue]
}

function next(node, collection) {
  return collection[node['next']]
}

function nodeAt(index, headValue, collection) {
  let current = headNode(headValue, collection);
  for (let i=0; i<index; i++) {
    current = next(current, collection);
  }
  return current
}

function addressAt(index, headValue, collection) {
  const node = nodeAt(index, headValue, collection);
  return Object.keys(collection).find(key => collection[key] === node)
}

function indexAt(node, collection, headValue) {
  let nextNode = headNode(headValue, collection);
  let index = 0;
  while (nextNode !== node) {
    nextNode = next(nextNode, collection);
    index++;
  }
  return index;
}

function insertNodeAt(index, newNode, headValue, collection) {
  let node = collection[newNode];
  let newAddress = addressAt(index, headValue, collection);
  if (index === 0) {
    node['next'] = newAddress;
  } else {
    let previous = nodeAt(index-1, headValue, collection);
    previous['next'] = newNode;
    node['next'] = newAddress;
  }
}

function deleteNodeAt(index, headValue, collection) {
  let address = addressAt(index, headValue, collection);
  if (index === 0) {
    delete collection[address];
  } else {
    let previous = nodeAt(index - 1, headValue, collection);
    previous['next'] = addressAt(index + 1, headValue, collection);
    delete collection[address];
  }
}
