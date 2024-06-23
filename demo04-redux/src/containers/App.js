import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import store from '../stores/index';
import { changeInputAction, addItemAction, removeItemAction } from '../actions/index';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRmItem = this.handleRmItem.bind(this);
        this.updateUI = this.updateUI.bind(this);
        store.subscribe(this.updateUI);
    }
    handleChange(e) {
        store.dispatch(changeInputAction(e.target.value))
    }
    handleAddItem(e) {
        if (this.state.inputValue !== '') {
            console.log('addItem')
            store.dispatch(addItemAction(this.state.inputValue));
        }
    }
    handleRmItem(index) {
        store.dispatch(removeItemAction(index))
    }
    updateUI() {
        this.setState(store.getState());
    }
    render() {
        return (
             <TodoList 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleChange={this.handleChange}
                handleAddItem={this.handleAddItem}
                handleRmItem={this.handleRmItem}
             />
        );
    }
}

export default App;