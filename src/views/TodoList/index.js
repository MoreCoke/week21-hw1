/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState, useEffect, useMemo } from 'react';

import { Container, FilterButtons, List } from 'views/TodoList/style';
import TodoItem from 'views/TodoList/components/TodoItem';
import TodoAddBar from 'views/TodoList/components/TodoAddBar';
import {
  PrimaryButton,
  SuccessButton,
  InfoButton,
  DangerButton,
} from 'components/Button';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoType, setTodoType] = useState('all');

  useEffect(() => {
    console.log(
      'todoList',
      todoList.map((e) => e.isDone)
    );
  }, [todoList]);

  const onAddTodoClick = (title) => {
    const todo = {
      id: new Date().getTime(),
      todo: title,
      isDone: false,
      isEdit: false,
    };
    setTodoList((prevTodoList) => [todo, ...prevTodoList]);
  };

  const onEditTodoClick = (id, editValue) => {
    const newTodoList = todoList.map((element) => {
      if (element.id === id) {
        return { ...element, isEdit: !element.isEdit, todo: editValue };
      }
      return element;
    });
    setTodoList(newTodoList);
  };

  const onDeleteTodoClick = (id) => {
    const newTodoList = todoList.filter((element) => element.id !== id);
    setTodoList(newTodoList);
  };

  const onToggleDoneTodoClick = (id) => {
    const newTodoList = todoList.map((element) => {
      if (element.id === id) {
        return { ...element, isDone: !element.isDone };
      }
      return element;
    });
    setTodoList(newTodoList);
  };

  const filterTodoList = useMemo(() => {
    switch (todoType) {
      case 'all':
        return todoList;
      case 'done':
        return todoList.filter((element) => element.isDone);
      case 'undone':
        return todoList.filter((element) => !element.isDone);
      // case 'deleteAll':
      //   return [];
      default:
        throw new Error("can't find todo filter type!");
    }
  }, [todoList, todoType]);

  return (
    <Container>
      <TodoAddBar onClick={onAddTodoClick} />
      <FilterButtons>
        <PrimaryButton onClick={() => setTodoType('all')}>
          全部任務
        </PrimaryButton>
        <SuccessButton onClick={() => setTodoType('done')}>
          已完成
        </SuccessButton>
        <InfoButton onClick={() => setTodoType('undone')}>未完成</InfoButton>
        <DangerButton
          onClick={() => {
            setTodoType('all');
            setTodoList([]);
          }}
        >
          刪除全部
        </DangerButton>
      </FilterButtons>
      <List>
        {filterTodoList.map((element) => (
          <TodoItem
            todo={element}
            key={element.id}
            onEditTodoClick={onEditTodoClick}
            onDeleteTodoClick={onDeleteTodoClick}
            onToggleDoneTodoClick={onToggleDoneTodoClick}
          />
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
