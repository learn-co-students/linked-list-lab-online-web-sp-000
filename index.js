function getName(node){
  return node.name;
}

function headNode(key, list){
  return list[key];
}

function next(node, list){
  return list[node.next];
}

function nodeAt(index, key, list){
  return findNode(index, key, list);
}

function addressAt(index, key, list){
  const node = findNode(index, key, list);
  return Object.keys(list).find(key => list[key] === node);
}

function findNode(index, key, list){
  let i = 0;
  let node = headNode(key, list);

  while (i < index) {
    node = next(node, list);
    i++;
  }
  return node;
}

function indexAt(node, list, key){
  let i = 0;
  let currentNode = headNode(key, list);

  while (currentNode !== node) {
    currentNode = next(currentNode, list);
    i++;
  }
  return i;
}

function insertNodeAt(index, newNodeKey, headNodeKey, list){
  // point new to next's key
  list[newNodeKey].next = addressAt(index, headNodeKey, list);

  // point prev to new
  const prev = index - 1;
  if (prev >= 0)
    nodeAt(prev, headNodeKey, list).next = newNodeKey;
}

function deleteNodeAt(index, key, list){
  // set preceding node's reference to following node's
  nodeAt(index - 1, key, list).next = addressAt(index + 1, key, list);
}
