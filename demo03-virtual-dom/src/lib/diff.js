const diff = (oldTree, newTree) => {
    let patches = {};
    let index = 0;

    TreeWalker(oldTree, newTree, index, patches);

    return patches;
}

const TreeWalker = (oldNode, newNode, index, patches) => {
    let current = [];

    if (!newNode) {
        current.push({type: 'REMOVE', index});
    } else if (isString(oldNode) && isString(newNode)) {
        if (newNode !== oldNode) {
            current.push({type: 'TEXT', payload: newNode});
        }
    } else if (newNode.type === oldNode.type) {
        let attr = diffAttr(oldNode.props, newNode.props);
        console.log('attr：', attr)
        
        if (Object.keys(attr).length > 0) {
            current.push({type: 'ATTR', payload: attr});
        }
        console.log('children: ', JSON.stringify(oldNode.children))
        console.log('children: ', JSON.stringify(newNode.children))

        diffChildren(oldNode.children, newNode.children, patches)
    } else {
        current.push({type: 'REPLACE', payload: newNode})
    }

    if (current.length) {
        patches[index] = current;
    }
}

const isString = obj => typeof obj === 'string';

const diffAttr = (oldAttrs, newAttrs) => {
    let patch = {};

    for (let key in oldAttrs) {
        if (newAttrs[key] !== oldAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }

    for (let key in newAttrs) {
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}

let num = 0;
const diffChildren = (oldChildren, newChildren, patches) => {
    oldChildren.forEach((child, index) => {
        TreeWalker(child, newChildren[index], ++num, patches)
    })
}

export default diff;