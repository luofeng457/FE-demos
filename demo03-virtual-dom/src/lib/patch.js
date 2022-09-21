import { Element, render, setAttr } from './element';

let index = 0;
let allPatches;

const patch = (node, patches) => {
    allPatches = patches;
    tranverse(node);
}

const tranverse = node => {
    let current = allPatches[index++];
    let childNodes = node.childNodes;

    if (current) {
        doPatch(node, current);
    }

    if (current && current[0].type === 'REPLACE') {
        childNodes = [];
    }

    childNodes.forEach(child => tranverse(child));
}

const doPatch = (node, patches) => {
    patches.forEach(patch => {
        switch (patch.type) {
            case 'TEXT':
                node.textContent = patch.payload;
                break;
            case 'REMOVE':
                node.parentNode.removeChild(node);
                break;
            case 'REPLACE':
                let newNode = patch.payload;
                newNode = (newNode instanceof Element) ? render(newNode) : document.createTextNode(newNode);
                node.parentNode.replaceChild(newNode, node);
                break;
            case 'ATTR':
                for (let key in patch.payload) {
                    let value = patch.payload[key];
                    if (value) {
                        setAttr(node, key, value);
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;
            default:
                break;
        }
    })
}

export default patch;