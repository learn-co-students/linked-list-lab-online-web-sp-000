function getName(node)
{
  return node.name
}

function headNode(linkedList, collection)
{
  return collection[linkedList]
}

function next(node, collection)
{
  let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection)
{
  let node = headNode(linkedList, collection)
  for(let i = 0; i < index; i++)
  {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection)
{
  let node = headNode(linkedList, collection)
  if(index === 0)
  {
    return linkedList
  }
  for(let i = 0; i < index - 1; i++)
  {
    node = next(node, collection)
  }
  return node.next
}

function indexAt(node, collection, linkedList)
{
  let counter = 0;
  let comparedNode = next(node, collection)
  if(node == collection[linkedList])
  {
    return 0
  }
  if(getName(node) == getName(comparedNode))
  {
    return counter;
  }
  else
  {
    comparedNode = next(comparedNode, collection)
    counter++
  }
return counter
}

function insertNodeAt(index, address, linkedList, collection)
{
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let giveToNewNode = prevNode.next
  prevNode.next = address
  
  let newNode = nodeAt(1, linkedList, collection)
  newNode.next = giveToNewNode
}

function deleteNodeAt(index, linkedList, collection)
{
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let deletedNode = nodeAt(index, linkedList, collection)
  prevNode.next = deletedNode.next
  deletedNode.next = null
}

