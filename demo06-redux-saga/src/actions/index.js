// action types
export const CHANGE_INPUT = 'change_input';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const GET_LIST = 'getList';


// action creator
export const getListAction = () => ({
    type: GET_LIST,
})

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


