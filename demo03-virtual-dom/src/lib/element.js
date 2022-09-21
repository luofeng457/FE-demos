class Element {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

const createElement = (type, props, children) => new Element(type, props, children);

const render = domObj => {
    let el = document.createElement(domObj.type);

    for (let key in domObj.props) {
        setAttr(el, key, domObj.props[key])
    }

    domObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) : document.createTextNode(child);
        el.appendChild(child);
    })

    console.log('render: ', el)

    return el;
}

const setAttr = (node, key, value) => {
    switch(key) {
        case 'style':
            node.style.cssText = value;
            break;
        case 'value':
            if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
                node.value = value;
            } else {
                node.setAttribute(key, value);
            }
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

const renderDOM = (el, root) => {
    root.appendChild(el);
}

export { Element, createElement, render, renderDOM, setAttr }