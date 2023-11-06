function Tree(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

Tree.prototype[Symbol.iterator] = function* () {
    yield this.val;
    if (this.left) yield* this.left;
    if (this.right) yield* this.right;
};

var root = new Tree(1, new Tree(2, new Tree(3), null), new Tree(4));

const breadthFirstTraversal = (tree, callback) => {
    if (tree == null) {
        return;
    }

    let queue = [tree];

    while (queue.length > 0) {
        let item = queue.splice(0, 1)[0]; // Using splice to remove the first item
        let value = item.val;
        callback(value);
        if (item.right != null) {
            queue.push(item.right);
        }
        if (item.left != null) {
            queue.push(item.left);
        }

    }
};

breadthFirstTraversal(root, console.log);

