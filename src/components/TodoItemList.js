import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = React.memo(({items, onRemove, onUpdate}) => {
    console.log("TodoItemList");
    const list = items.map(
        item => <TodoItem key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate}/>
    )

    return (
        <div>
            {/* {
                items.information === undefined
                ?
                items.map(item => (
                    <TodoItem key={item.id} item={item} onRemove={onRemove} />
                ))
                :
                items.information.map(item => (
                    <TodoItem key={item.id} item={item} onRemove={onRemove} />
                ))
            } */}
            {list}
        </div>
    );
}
, (prevProps, nextProps) => {
    return prevProps.item === nextProps.item;
})

TodoItemList.defaultProps = {
    items: [],
    onRemove: () => console.warn('onRemove is not defined'),
    onUpdate: () => console.warn('onUpdate is not defined'),
}

export default TodoItemList;