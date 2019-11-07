/**
 * type: 标签名
 * props: 节点属性
 * children: 子节点
 * @class Element
 */
class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

/**
 * 创建Element实例
 * @param {String} type 标签名
 * @param {Object} props 节点属性
 * @param {Array} children 子节点
 */
const createElement = (type, props, children) => {
    return new Element(type, props, children);
}

/**
 * 根据js对象（虚拟DOM）渲染真实DOM
 * @param {Object} domObj 虚拟DOM对象
 */
const render = domObj => {
    let el = document.createElement(domObj.type);
    
    // 设置属性
    for(let key in domObj.props) {
        console.log('setAttr: -- ', el, key)
        setAttr(el, key, domObj.props[key]);
    }

    // 递归渲染子节点
    domObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child);
    });

    return el;
} 

const setAttr = (node, key, val) => {
    switch(key) {
        case 'style':
            node.style.cssText = val;
            break;
        case 'value':
            if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
                node.value = val;
            } else {
                node.setAttribute('value', val);
            }
            break;
        default:
            node.setAttribute(key, val);
            break;
    }
}

const renderDOM = (el, root) => {
    root.appendChild(el);
}

export { Element, createElement, render, setAttr, renderDOM };