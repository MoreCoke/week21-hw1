/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

const TodoItemCheckbox = styled.input.attrs(({ defaultChecked, id }) => ({
  type: 'checkbox',
  defaultChecked,
  id: id || '',
}))`
  margin-right: 0.5rem;
`;

const TodoItemEditInput = styled.input`
  margin-left: 0.5rem;
`;

const TodoItemLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  ${({ isDone }) => isDone && `text-decoration: line-through;`}
`;

const TodoItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s;
  outline: none;
`;

const WarningButton = styled(Button)`
  background-color: #ffc107;
  border: 1px solid #ffc107;
  color: black;
  &:focus {
    border-color: #ffc107;
  }
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
  border: 1px solid #dc3545;
  color: white;
  &:focus {
    border-color: #dc3545;
  }
`;

const TodoItemButtons = styled.div`
  ${Button} ~ ${Button} {
    margin-left: 1rem;
  }
`;

export default function TodoItem({
  todo,
  onEditTodoClick,
  onDeleteTodoClick,
  onToggleDoneTodoClick,
}) {
  const [todoEditInputValue, setTodoEditInputValue] = useState(todo.todo);

  const onEditTodoChange = (e) => {
    setTodoEditInputValue(e.target.value);
  };

  return (
    <TodoItemWrapper>
      <div className="d-flex align-items-baseline">
        <TodoItemContent onClick={() => onToggleDoneTodoClick(todo.id)}>
          {/* 練習用 styled-component attr */}
          <TodoItemCheckbox defaultChecked={todo.isDone} id={todo.id} />
          <TodoItemLabel htmlFor={todo.id}>{todo.todo}</TodoItemLabel>
        </TodoItemContent>
        {todo.isEdit && (
          // 不透過 attr 直接傳 input 也行
          <TodoItemEditInput
            type="text"
            value={todoEditInputValue}
            onChange={onEditTodoChange}
          />
        )}
      </div>

      <TodoItemButtons>
        <WarningButton
          onClick={() => onEditTodoClick(todo.id, todoEditInputValue)}
        >
          {todo.isEdit ? '完成編輯' : '編輯'}
        </WarningButton>
        <DangerButton onClick={() => onDeleteTodoClick(todo.id)}>
          刪除
        </DangerButton>
      </TodoItemButtons>
    </TodoItemWrapper>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    isEdit: PropTypes.bool.isRequired,
  }),
  onEditTodoClick: PropTypes.func,
  onDeleteTodoClick: PropTypes.func,
  onToggleDoneTodoClick: PropTypes.func,
};
