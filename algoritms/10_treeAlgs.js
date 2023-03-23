// Алгоритмы для обхода дерева

// Деревья Рекурсивная структура данных, где каждый узел является деревом,
// но для данного дерева каждый узел является под деревом

const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
];

//Рекурсивный обход дерева n-размерности
const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v;
        if(!node.c) {
            return node.v;
        }
        sum += recursive(node.c);
    });
    return sum;
}
 
//Итеративный обход дерева n-размерности
//Используется структура данных Стек - LIFO - Last in First out
const iteration = (tree) => {
    if(!tree.length) {
        return 0;
    }
    let sum = 0;
    let stack = [];
    tree.forEach(node => stack.push(node));
    while(stack.length) {
        const node = stack.pop();
        sum += node.v;
        if(node.c) {
            node.c.forEach(child => stack.push(child));
        }
    }
    return sum;
}

// console.log('recursive', recursive(tree));
console.log('iteration', iteration(tree));
