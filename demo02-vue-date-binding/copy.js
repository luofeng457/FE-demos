// Observer
function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function defineReactive(obj, key, val) {
    // 递归子属性
    observe(val)
    let dp = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value: ', val)
            // 将 Watcher 添加到订阅
            if (Dep.target) {
                dp.addSub(Dep.target)
            }
            return val
        },
        set: function reactiveSetter(newVal) {
            console.log('change value: ', newVal)
            val = newVal
            // 执行 watcher 的 update 方法
            dp.notify()
        }
    })
}

// 通过 Dep 解耦
class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        // sub 是 Watcher 实例
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
// 全局属性，通过该属性配置 Watcher
Dep.target = null

function update(value) {
    document.querySelector('div').innerText = value
}
function update2(val) {
    document.querySelector('p').innerText = val;
}

class Watcher {
    constructor(obj, key, cb) {
        // 将 Dep.target 指向自己
        // 然后触发属性的 getter 添加监听
        // 最后将 Dep.target 置空
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
    }
    update() {
        // 获得新值
        this.value = this.obj[this.key]
        // 调用 update 方法更新 Dom
        this.cb(this.value)
    }
}

var data = { name: 'fn', gender: 'male' };
observe(data);
new Watcher(data, 'gende', update2);
new Watcher(data, 'name', update);
data.name = 'dangerous';
data.gender = 'female';
