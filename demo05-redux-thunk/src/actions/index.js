import axios from 'axios';
// action types
export const CHANGE_INPUT = 'change_input';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const GET_LIST = 'getList';
export const GET_TOTO_LIST = 'getTodoList';

// action creator
export const getListAction = data => ({
    type: GET_LIST,
    data
})

/** 
 * redux-thunk使用：
 * 页面初始化时派发一个action: getTodoList；
 * 中间件redux-thunk匹配到对应action,然后执行getTodoList进行数据获取；
 * 获取到数据后，接着dispatch一个action: getListAction，
 * 然后执行reducer中对应的状态更新，用于真正的页面数据渲染；
 */
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


