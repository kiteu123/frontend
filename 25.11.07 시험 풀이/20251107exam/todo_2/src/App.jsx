import React, { useState, useRef } from "react";

export default function App() {
  const today = new Date().toLocaleDateString();
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부하기", completed: false, date: today },
    { id: 2, text: "빨래 널기", completed: false, date: today },
    { id: 3, text: "노래 연습하기", completed: true, date: today },
  ]);

  const inputRef = useRef();

  // ✅ 새로운 할 일 추가
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // ✅ 완료 상태 토글
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ 할 일 삭제
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ✅ 입력 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div style={styles.container}>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
      <p>새로운 Todo 작성하기🖋</p>

      <div style={styles.inputRow}>
        <input
          ref={inputRef}
          type="text"
          placeholder="새로운 할 일을 입력하세요..."
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
      </div>

      <ul style={styles.list}>
        {todos.map(({ id, text, completed, date }) => (
          <li
            key={id}
            style={{
              ...styles.item,
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "#aaa" : "#000",
            }}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodo(id)}
            />
            <div style={styles.textWrapper}>
              <span style={styles.text}>{text}</span>
              <span style={styles.date}>{date}</span> {/* ✅ 날짜 표시 */}
            </div>
            <button onClick={() => deleteTodo(id)} style={styles.deleteBtn}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "400px",
    margin: "40px auto",
    textAlign: "center",
  },
  inputRow: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    marginBottom: "16px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "8px 0",
  },
  text: {
    flex: 1,
    marginLeft: "8px",
    textAlign: "left",
  },
  deleteBtn: {
    background: "#ff4d4d",
    border: "none",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  date: {
    fontSize: "14px",
    color: "#777",
    marginRight: "10px",
  },
  textWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between", // ✅ 좌우 배치
    alignItems: "center",
    marginLeft: "8px",
  },
};
