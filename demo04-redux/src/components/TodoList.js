import React from 'react'; 
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoList = props => (
    <div>
        <Input
            style={{width: '250px', marginRight: '15px'}}
            placeholder="something to be done"
            value={props.inputValue}
            onChange={props.handleChange}
        />
        <Button
            type="primary"
            onClick={props.handleAddItem}
        >Add Item</Button>
        <List
            style={{width: '400px', marginTop: '20px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item onClick={() => props.handleRmItem(index)}>{item}</List.Item>}
        />
    </div>
)

export default TodoList;