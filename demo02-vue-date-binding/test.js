/**
 * Observer: 数据劫持
 */
function observe(obj) {
// Observer：数据劫持
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function defineReactive(obj, key, val) {
    let dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('getter: ', val);
            if (Dep.target) {
                dep.addSub(Dep.target); // 只有通过Watcher中手动触发的getter其Dep.target才不为null
            }
            return val;
        },
        set: function (newVal) {
            console.log('setter: ', newVal)
            val = newVal;
            dep.notify();   // 通知更新
        }
    })
}


/**
 * Dep解耦：添加订阅者Watchers，并通知来自Observer的对应更新通知
 */
class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}
// 用于指定对应观察者
Dep.target = null;


/**
 * Watcher: 添加订阅者，并根据Dep的通知更新视图
 * 参数介绍：
 *      obj - 被观察对象
 *      key - 被观察对象属性
 *      cb  - 收到更新通知的回调，用于直接更新视图
 */
class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this;
        this.cb = cb;
        this.obj = obj;
        this.key = key;
        this.val = obj[key];  // 手动触发getter，用于添加观察者，会调用addSub()方法
        Dep.target = null;  // 添加成功后重新置空
    }
    update() {
        // 获取更新后的值
        this.val = this.obj[this.key];
        // 更新视图
        this.cb(this.val);
    }
}

function update1(val) {
    document.querySelector('div').innerText = val;
}
function update2(val) {
    document.querySelector('p').innerText = val;
}

var data = {name: 'fn', gender: 'male'}
observe(data);
new Watcher(data, 'name', update1);
new Watcher(data, 'gender', update2);
data.name = 'luofeng';
data.gender = 'male';