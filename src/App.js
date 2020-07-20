import React, { useState } from 'react';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

const todayDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let todayDate = year + '-' + month + '-' + date;

  return todayDate;
}

const App = () => {
  let id = 2;
  const [information, setInformation] = useState([
    {
      id: 0,
      deadline: '7/20',
      todo: '마감',
    }, 
    {
      id: 1,
      deadline: '7/22',
      todo: '시작',
    }
  ]);

  const [keyword, setKeyword] = useState('');

  const handleCreate = (data) => {
    setInformation([...information, { id: id++, ...data }]);
  }

  const handleRemove = (id) => {
    setInformation(information.filter(info => info.id !== id));
  }

  const handleUpdate = (id, data) => {
    setInformation(information.map(info => info.id === id? { id, ...data } : info));
  }

  
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const filteredList = information.filter(info => info.todo.indexOf(keyword) !== -1);

  return (
    <div>
      <h1>Todo List</h1>
      <p>오늘 날짜: {todayDate()}</p>
      <p>할 일이 {information.length}개 있습니다. </p>
      <Form onCreate={handleCreate} />
      <p>
        <input
          value={keyword}
          placeholder="할 일을 검색하세요"
          onChange={handleChange}
        />
      </p>
      <hr />
      <TodoItemList items={filteredList} onRemove={handleRemove} onUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
