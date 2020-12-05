import React, { useState } from 'react';

export default function TodoItem(props) {
  // 我記得用 prop 當作 component 中 state 並不是好的設計方式，但又不知道除此之外能怎麼做比較好
  const [todoEditInputValue, setTodoEditInputValue] = useState(props.todo.todo);

  const onEditTodoChange = (e) => {
    setTodoEditInputValue(e.target.value);
  };

  return (
    <li className="list-group-item" data-id={props.todo.id}>
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="d-flex align-items-baseline">
          <div onClick={() => props.onToggleDoneTodoClick(props.todo.id)}>
            <input
              type="checkbox"
              className="mr-2 todo-mark"
              id={props.todo.id}
              defaultChecked={props.todo.isDone}
            />
            <label
              className={props.todo.isDone ? 'done' : ''}
              htmlFor={props.todo.id}
            >
              {props.todo.todo}
            </label>
          </div>
          {props.todo.isEdit && (
            <input
              type="text"
              className="ml-2 form-group"
              name="edit"
              value={todoEditInputValue}
              onChange={onEditTodoChange}
            />
          )}
        </div>
        <div>
          <button
            className="btn btn-warning mr-3"
            onClick={() =>
              props.onEditTodoClick(props.todo.id, todoEditInputValue)
            }
          >
            {props.todo.isEdit ? '完成編輯' : '編輯'}
          </button>
          <button
            className="btn btn-danger mr-3"
            onClick={() => props.onDeleteTodoClick(props.todo.id)}
          >
            刪除
          </button>
        </div>
      </div>
    </li>
  );
}
