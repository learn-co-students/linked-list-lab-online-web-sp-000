let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let newNode = {name: 'jill', next: ''}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode,
  asnan: lastNode,
  whana: firstNode,
  ajhsak: newNode}
  let linkedList = 'whana'

function next(head, col) {
  return col[head["next"]]
}

function getName(node) {
  return node["name"]
}

function headNode(link, col) {
  return col[link];
}

function nodeAt(idx, link, col) {
  if (idx == 0) return headNode(link, col);
  let i = 1;
  let node = headNode(link, col);

  while (i <= idx) {
    node = next(node, col);
    i++;
  }

  return node;
}

function addressAt(idx, link, col) {
  if (idx == 0 ) return link;

  return nodeAt(idx - 1, link, col)['next']
}

function indexAt(node, col, link) {
  let hNode = headNode(link, col)
  let cachedNode = hNode;
  let i = 0;
  for (i; i < 10; i++) {
    if (cachedNode == node) {
      return i;
    }

    cachedNode = next(hNode, col)
  }

  return i;
}

function insertNodeAt(idx, addressTo, link, col) {
  let addy = addressAt(idx - 1, link, col);
  let node = col[link];
  let newPath, prev;
  while (idx > 0) {
    prev = node['next']
    node = next(node, col);
    newPath = node['next']
    idx--;
  }

  let previous = col[prev];
  previous['next'] = newPath;

  let lin = col[addressTo];
  lin['next'] = prev;

  let fin = col[addy];
  fin['next'] = addressTo

  return node;
}

function deleteNodeAt(idx, list, col) {
  let header = col[list];
  let node = header;
  let deleteMe, newPath;
  while (idx >= 0) {
    if (idx == 1) {
      deleteMe = node['next']
      idx--;
    }

    node = next(node, col)
    newPath = node["next"];
    idx--;
  }

  col[deleteMe] = null
  header['next'] = newPath
}
