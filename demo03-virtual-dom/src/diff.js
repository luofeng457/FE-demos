
/**
 * to get the differences between oldTree and newTree.
 * The diffs stores in patches.
 * @param {*} oldTree
 * @param {*} newTree
 */
const diff = (oldTree, newTree) => {
    let patches = {};   //  格式类似
    let index = 0;      // 为DOM对象对应二叉树建立索引，便于查找和应用更新

    TreeWalker(oldTree, newTree, index, patches);

    return patches;
}

const TreeWalker = (oldNode, newNode, index, patches) => {
    let cur = [];   // 保存单个节点的变更信息

    console.log(`index: ${index} -> oldNode: ${JSON.stringify(oldNode)} -> newNode: ${JSON.stringify(newNode)}`)

    if (!newNode) { // 节点删除
        cur.push({type: 'REMOVE', index});
    } else if (isString(oldNode) && isString(newNode)) { // 文本节点
        if (newNode !== oldNode) {
            cur.push({type: 'TEXT', payload: newNode})
        }
    } else if (newNode.type === oldNode.type) { // 节点属性修改
        let attr = diffAttr(oldNode.props, newNode.props);
        console.log(`attrs: ${JSON.stringify(attr)} -> oldProps: ${JSON.stringify(oldNode.props)} -> newNode.props: ${JSON.stringify(newNode.props)}`)
        if (Object.keys(attr).length > 0) {
            cur.push({type: 'ATTR', payload: attr})
        }
        diffChildren(oldNode.children, newNode.children, patches);
    } else {    // 节点替换
        cur.push({type: 'REPLACE', payload: newNode})
    }
    if (cur.length) {
        patches[index] = cur;
    }
}

const isString = obj => (typeof obj === 'string');

const diffAttr = (oldAttrs, newAttrs) => {
    let patch = {};
    // debugger;
    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }
    // 新增属性
    for (let key in newAttrs) {
        if(!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }

    console.log('patch: ', patch)
    
    return patch;
}

let num = 0;

const diffChildren = (oldChildren, newChildren, patches) => {
    oldChildren.forEach((child, index)=> {
        TreeWalker(child, newChildren[index], ++num, patches);
    })
}

export default diff