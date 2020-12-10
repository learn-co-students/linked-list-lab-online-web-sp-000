
function getName(node){
  return node.name;
}

function headNode(headAddress, collection){
  let head = collection[headAddress]
  return head;
}

function next(node, collection){
  return collection[node.next];
}


function nodeAt(index, headAddress, collection){
  let node = headNode(headAddress,collection)
  let i = 0;
  while(i < index){
    node = next(node, collection);
    i++;
  }
  return node;
}


function addressAt(index, headAddress, collection){
  if(index === 0){
    return headAddress
  }else{
    let nodePrior = nodeAt(index-1, headAddress, collection);
    return nodePrior.next; //.next returns the address of the next node
  }
}


function indexAt(node, collection, headAddress){
  let index = 0;
  if(node.name === headNode(headAddress, collection).name){
    return index;
  }else{
    index = 1
    while(nodeAt(index, headAddress, collection).name != node.name) {
      index += 1; //iterate through all nodes until .names match and then return the index
    }
    return index;
  }
}


function insertNodeAt(index, nodeAddress, headAddress, collection){
  let previousNode = nodeAt(index-1, headAddress, collection);
  let previousNodeAddress = addressAt(index-1, headAddress, collection);

  let nextNode = nodeAt(index, headAddress, collection);
  let nextNodeAddress = addressAt(index, headAddress, collection);
  let nextNodeIndex = indexAt(nextNode, collection, headAddress);
  previousNode.next = nodeAddress; //returns inserted node Address

  let newNode = collection[nodeAddress]; //sets new node element name at the correct inserted index
  newNode.next = nextNodeAddress; //sets the address of the next node element
}


function deleteNodeAt(index, headAddress, collection){
  let prevNode;
  let currNode = headNode(headAddress, collection);
  let i = 0;
  for(i; i < index; i++){
     prevNode = currNode
     currNode = next(currNode, collection);
  }
  prevNode.next = currNode.next;
}
