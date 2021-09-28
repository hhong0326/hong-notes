import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    } // 리렌더링 여부 설정. 업데이트의 기준을 설정할 수 있다

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    color={color}
                /> // 배열을 렌더링 할 때는 key 값이 있어야 한다
            )
        );

        return (
            <div>
                { todoList }
            </div>


        );
    }
}

export default TodoItemList;