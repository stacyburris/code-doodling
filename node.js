'use strict';

// linked list

currentNode = this.head;

while (currentNode.next !== null) {
  currentNode = currentNode.next;
}
return currentNode.value;
//(give value of final node)
