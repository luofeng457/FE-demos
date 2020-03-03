import { action, observable, computed } from 'mobx';

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

export default Store;