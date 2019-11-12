/**
 * 单链表
 */
class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(ctx) {
        this.queue.push(ctx);
    }
    deQueue() {
        this.queue.shift();
    }
    getHeader() {
        return this.queue[0];
    }
    getLength() {
        return this.queue.length;
    }
    isEmpty() {
        return this.getLength() === 0;
    }
}

class BiQueue {
    constructor(len) {
        this.queue = new Array(len + 1);
        // 队首
        this.first = 0;
        // 队尾
        this.last = 0;
        // size
        this.size = 0;
    }
    enQueue(ctx) {
        if ((this.queue.last + 1) % length === this.first) {    // 数组扩容
            this.resize(this.getLength() *2 + 1);
        }
        this.queue[this.last] = ctx;
        this.size++;
        this.last = (this.last + 1) % this.queue.length;
    }
    deQueue() {
        if (this.isEmpty) {
            throw new Error('can not dequeuefrom empty queue.')
        }
        let r = this.queue[this.first];
        this.queue[this.first] = null;
        this.first = (this.first + 1) % this.queue.length;
        this.size--;

        if (this.size === this.getLength() / 4 && this.getLength / 2 !== 0) {
            this.resize(this.getLength / 2);
        }
        return r;
    }
    getHeader() {
        if (this.isEmpty()) {
            throw new Error('can not get header of empty queue.')
        }
        return this.queue[this.first];
    }
    getLength() {
        return this.queue.length - 1;
    }
    isEmpty() {
        return this.first === this.last;
    }
    resize(length) {
        let q = new Array(length);
        for (let i = 0; i < length; i++) {
            q[i] = this.queue[(i + this.first) % this.queue.length]
        }
        this.queue = q;
        this.first = 0;
        this.last = this.size;
    }
}