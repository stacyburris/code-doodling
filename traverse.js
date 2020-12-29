'use strict';

// node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

// traverse a linked list

let currentNode = this.head;
while (currentNode.next !== null) {
  currentNode = currentNode.next;
}

// traverse a stack

let currentNode = this.top;
while (currentNode.next !== null) {
  currentNode = currentNode.next;
}


// traverse a queue

let currentNode = this.front;
while (currentNode.next !== null) {
  currentNode = currentNode.next;
}

// Traverse a Binary Tree
// preOrder, inOrder and postOrder
class BinaryTree {
  constructor(node = null) {
    this.node = new Node(node);
  }

  preOrder() { // root, left, right
    const array = [];
    let _walker = node => {
      (node !== null)
      array.push(node.value);
      if (node.left) _walker(node.left);
      if (node.right) _walker(node.right);
    }

    _walker(this.root);
    return array;
  }

  inOrder() { // left, root, right
    const array = [];
    let _walker = node => {
      (node !== null)
      if (node.left) _walker(node.left);
      array.push(node.value);

      if (node.right) _walker(node.right);
    }
    _walker(this.root);
    return array;
  }

  postOrder() { // left, right, root
    const array = [];
    let _walker = node => {
      (node !== null)
      if (node.left) _walker(node.left);
      if (node.right) _walker(node.right);
      array.push(node.value);
    }
    _walker(this.root);
    return array;
  }
}