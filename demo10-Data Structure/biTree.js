class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BiTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    addNode(v) {
        this.root = this._addChild(this.root, v);
    }
    _addChild(node, v) {
        if(!node) {
            this.size++;
            return new Node(v);
        }
        if (node.value > v) {
            node.right = this._addChild(node.right, v);
        }
        if (node.value < v) {
            node.left = this._addChild(node.left, v);
        }
        return node;
    }
}