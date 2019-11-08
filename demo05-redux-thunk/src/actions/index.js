import axios from 'axios';
// action types
export const CHANGE_INPUT = 'change_input';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const GET_LIST = 'getList';


// action creator
export const getListAction = data => ({
    type: GET_LIST,
    data
})
// redux-thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('http://mock-api.com/rg1WrEKY.mock/list')
        .then(res => {
            dispatch(getListAction(res))
        })
    }
}

export const changeInputAction = text => ({
    type: CHANGE_INPUT,
    text
});

export const addItemAction = text => ({
    type: ADD_ITEM,
    text
});

export const removeItemAction = index => ({
    type: REMOVE_ITEM,
    index
})


