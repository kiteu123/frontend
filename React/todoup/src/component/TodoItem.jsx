import React from "react";
import "./TodoItem.css";

export default function TodoItem({
  id,
  content,
  isDone,
  createDate,
  onToggle,
  onDelete,
}) {
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={() => onToggle(id)} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}
