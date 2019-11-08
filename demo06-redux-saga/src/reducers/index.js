import { ADD_ITEM, REMOVE_ITEM, CHANGE_INPUT, GET_LIST } from '../actions/index';

const initialState = {
    inputValue: '',
    list: []
}

export default (state=initialState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case GET_LIST:
            newState.list = action.data.data.list;
            break;
        case CHANGE_INPUT:
            newState.inputValue = action.text;
            break;
        case ADD_ITEM:
            newState.list.push(action.text);
            newState.inputValue = '';
            break;
        case REMOVE_ITEM:
            newState.list.splice(action.index, 1);
            break;
        default:
            break;
    }
    return newState;
}