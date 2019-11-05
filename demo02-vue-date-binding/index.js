// function defineReactive(obj, key, val) {
//     observer(val)
//     Object.defineProperty(obj, key, {
//         enumerable: true,
//         configurable: true,
//         get: function reactiveGetter() {
//             console.log('get val')
//         },
//         set: function reactiveSetter(newval) {
//             console.log('set val')
//             val = newVal;
//         }
//     })
// }

function defineReactive(obj, key, val) {
    observe(val);
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value');
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return val;
        },
        set: function reactiveSetter(newVal) {
            console.log('set value');
            val = newVal;
            dep.notify();
        }
    })
}

// Observer 劫持属性
function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

// 添加订阅/通知变化
class Dep {
    constructor() {
        this.subs = [];
    }
    // 添加订阅
    addSub(sub) {
        this.subs.push(sub);
    }
    // 通知变化给所有订阅者
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}
Dep.target = null;

// 更新实现
function update(value) {
    document.querySelector('div').innerText = value;
}

// 收到通知变化时，更新视图
class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this;
        this.obj = obj;
        this.key = key;
        this.cb = cb;
        this.value = obj[key]; // 触发属性的getter添加监听
        Dep.target = null;
    }
    update() {
        this.value = this.obj[this.key];
        // 调用update方法更新dom
        this.cb(this.value);
    }
}

var data = { name: 'yck' }
observe(data)
// 模拟解析到 `{{name}}` 触发的操作
new Watcher(data, 'name', update)
// update Dom innerText
data.name = 'yyy';


