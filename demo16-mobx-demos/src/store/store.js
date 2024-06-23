import { action, observable, computed, decorate } from 'mobx';


class Store {
    
    @observable num = 0;

    @computed get retNum() {
        return `the value of num is ${this.num}`
    } 

    @action.bound
    increment() {
        this.num++;
    }
}

class Store2 {
    
    num = 0;

    get retNum() {
        return `the value of num is ${this.num}`
    } 

    increment() {
        this.num++;
    }

}

decorate(Store2, {
    num: observable,
    retNum: computed,
    increment: action.bound
})

export default Store2;