export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.append(element);
    }
}

function createNode(childrenCount, level, depth) {
    const node = document.createElement('div');
    node.className = `item_${depth}`;

    if (depth < level) {
        for (let i = 0; i < childrenCount; i++) {
            node.append(createNode(childrenCount, level, depth + 1));
        }
    }

    return node;
}

export function generateTree(childrenCount, level) {
    return createNode(childrenCount, level, 1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodes = tree.querySelectorAll('.item_2');

    for (const node of nodes) {
        const section = document.createElement('section');
        section.className = node.className;

        while (node.firstChild) {
            section.append(node.firstChild);
        }

        node.replaceWith(section);
    }

    return tree;
}
