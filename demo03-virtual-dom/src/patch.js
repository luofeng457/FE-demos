import { Element, render, setAttr } from './element';

let allPatches;
let index=0;

const patch = (node, patches) => {
    allPatches = patches;
    tranverse(node);  
}

const tranverse = node => {
    let cur = allPatches[index++];
    let childNodes = node.childNodes;

    if (cur) {
        console.log('node cur', node, cur)
        doPatch(node, cur);
    }

    if (cur && cur[0].type === 'REPLACE') { // 当前节点被替换，则无需遍历其子节点
        childNodes = [];
    }

    childNodes.forEach(child => tranverse(child));
}


const doPatch = (node, patches) => {
    patches.forEach(patch => {
        console.log('dopatch: ', patch, node)
        switch(patch.type) {
            case 'ATTR':
                for (let key in patch.payload) {
                    let value = patch.payload[key];
                    console.log('dopatch value: ', value)
                    if (value) {
                        setAttr(node, key, value);
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;

            case 'REPLACE':
                let newNode = patch.payload;
                newNode = newNode instanceof Element ? render(newNode) : document.createTextNode(newNode);
                node.parentNode.replaceChild(newNode, node)
                break;
            case 'REMOVE':
                node.parentNode.removeChild(node);
                break;
            case 'TEXT':
                node.textContent = patch.payload;
                break;
            default:
                break;
        }
    })
}

export default patch;


