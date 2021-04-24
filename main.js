// BST Traversal ~TEST~

var inorderTraversal = function(root){
    if (root === null){
        return [];
    }

    const result = [];
    if (root.left !== null){
        result.push(...inorderTraversal(root.left))
    }
    result.push(root.val);

    if (root.right !== null){
        result.push(...inorderTraversal(root.right))
    }
    return result;
}

// Tree 

class Node {
    constructor(){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BinaryTree(){
    constructor(){
        this.root = null;
    }

    insert (data){
        const node = new Node (data);

        if(this.root === null){
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (data < current.data){
                if (current.left === null){
                    current.left = node;
                    return;
                }
            else{
                if (current.right === null){
                    current.right = node;
                    return;
                }

                current = current.right;
            }
            }
        }
    }
}