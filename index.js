// The collection of people


function getName(node)
{
  return node.name;
}

function headNode(linkedList, collection)
{
  return collection[linkedList];
}

function next(head, collection)
{
  return collection[head.next];
}

function nodeAt(index, linkedList, collection)
{
  let address = linkedList;

  for(let i = 0; i < index; i++)
  {
    address = collection[address].next;
  };

  return collection[address];
}

function addressAt(index, linkedList, collection)
{
  let address = linkedList;

  for(let i = 0; i < index; i++)
  {
    address = collection[address].next;
  };

  return address;
}

function indexAt(node, collection, linkedList)
{
  let index = 0;

  while(node.next && node != collection[linkedList])
  {
    index++;
    node = next(node, collection);
  };

  return index;
}


function insertNodeAt(index, newName, linkedList, collection)
{
  let beforeNode = nodeAt(index-1, linkedList, collection);
  let afterNode = next(beforeNode, collection);

  // update before node pointer
  let afterNodeAddress = addressAt(index, linkedList, collection);
  beforeNode.next = newName;

  // update new node pointer
  let newNode = headNode(newName, collection);
  newNode.next = afterNodeAddress;
}

function deleteNodeAt(index, linkedList, collection)
{
  // n solution
  let beforeNode;
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++)
  {
    beforeNode = currentNode;
    currentNode = next(currentNode, collection);
  };
  beforeNode.next = currentNode.next;

  //  2n solution
  // let beforeNode = nodeAt(index-1, linkedList, collection);
  // let afterNodeAddress = addressAt(index+1, linkedList, collection);

  // update before node pointer
  // beforeNode.next = afterNodeAddress;
}
