// Бинарное дерево поиска

// Это структура данных где каждый узел также является деревом,
// то есть структура рекурсивна. Основная суть в том, что у
// каждого узла может быть только два потомка.
// Добовляются эти узлы тоже особым способом, если добовляемое дерево значение 
// меньше по значение чем текущий угол, то значение уходит влевое под дерево, 
// если больше уходит вправо 
// Сравнение происходит с каждым узлом и так получается, что правая
// часть под дерева выстраивается с большими значениями
// левая с меньшими 

// O(log2n) - Поиск по дереву

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) { 
        if(!this.root) {
            this.root = new TreeNode(value);
        }else {
            let node = this.root;
            let newNode = new TreeNode(value);
            while(node) {
                if(value > node.value) {
                    if(!node.right) {
                        break;
                    }
                    node = node.right;
                }else {
                    if(!node.left) {
                        break;
                    }
                    node = node.left;
                }
            }

            if(value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) {
        if(!root) {
            return true;
        }
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
        
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree();

tree.add(4);
tree.add(6);
tree.add(2);
tree.add(9);
tree.add(7);
tree.add(1);

tree.print();