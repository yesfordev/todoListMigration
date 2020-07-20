import React, { useState } from 'react';

const Form = ({onCreate}) => {
    const [inputs, setInputs] = useState({
        deadline: '',
        todo: ''
    });

    const { deadline, todo } = inputs;

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(inputs);
        setInputs({
            deadline: '',
            todo: '',
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={deadline}
                placeholder="deadline"
                name="deadline"
                onChange={handleChange}
            />
            <input
                value={todo}
                placeholder="todo"
                name="todo"
                onChange={handleChange}
            />
            <button type="submit">할 일 추가</button>
        </form>
    );
}

export default Form;