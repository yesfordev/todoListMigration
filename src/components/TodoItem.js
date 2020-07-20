import React, { Component } from 'react';

class TodoItem extends Component {
    static defaultProps = {
        item: {
            deadline: '마감일',
            todo: '할 일',
            id: 0
        },
        onRemove: () => console.warn('onRemove is not defined'),
        onUpdate: () => console.warn('onUpdate is not defined'),
    }
    state = {
        editing: false,
        deadline: '',
        todo: '',
    }

    handleRemove = () => {
        const { item, onRemove } = this.props;
        onRemove(item.id);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggle = () => {
        const { editing } = this.state;
        this.setState({
            editing: !editing,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const {item, onUpdate} = this.props;

        if(!prevState.editing && this.state.editing) {
            this.setState({
                deadline: item.deadline,
                todo: item.todo,
            })
        }

        if(prevState.editing && !this.state.editing) {
            onUpdate(item.id,{
                deadline: this.state.deadline,
                todo: this.state.todo,
            })
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <input
                        value={this.state.deadline}
                        placeholder="deadline"
                        name="deadline"
                        onChange={this.handleChange}
                    />
                    <input
                        value={this.state.todo}
                        placeholder="todo"
                        name="todo"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleToggle}>적용</button>
                    <button onClick={this.handleRemove}>완료</button>
                </div>
            );
        }

        const { deadline, todo } = this.props.item;

        return (
            <div style={style}>
                <div>{deadline}</div>
                <div>{todo}</div>
                <button onClick={this.handleToggle}>수정</button>
                <button onClick={this.handleRemove}>완료</button>
            </div>
        );
    }
}

export default TodoItem;