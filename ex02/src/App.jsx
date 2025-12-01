import React, { useRef, useState } from "react";

export default function App() {
  const today = new Date().toLocaleDateString();
  const [todos, setTodos] = useState([
    { id: 1, text: "React 공부하기", completed: false, date: today },
    { id: 2, text: "빨래 널기", completed: false, date: today },
    { id: 3, text: "노래 연습하기", completed: false, date: today },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const inputTodo = useRef();

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

  const handleAddClick = () => {
    addTodo(inputTodo.current.value);
    inputTodo.current.value = "";
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  const handleSelectAll = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, completed: !allCompleted }))
    );
  };

  const handleDeleteSelected = () => {
    const selectedCount = todos.filter((t) => t.completed).length;
    if (selectedCount === 0) {
      alert("삭제할 항목이 없습니다.");
      return;
    }
    if (
      window.confirm(`체크된 ${selectedCount}개의 Todo를 삭제하시겠습니까?`)
    ) {
      setTodos((prev) => prev.filter((todo) => !todo.completed));
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allCompleted = todos.length > 0 && todos.every((t) => t.completed);
  return (
    <div style={styles.container}>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
      <p>새로운 할 일 작성하기🖋</p>
      <p></p>
      <div style={styles.inputRow}>
        <input
          ref={inputTodo}
          type="text"
          placeholder="새로운 Todo. . ."
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <button onClick={handleAddClick} style={styles.addBtn}>
          추가
        </button>
      </div>
      <p>할 일 List</p>

      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.actionRow}>
        <button onClick={handleSelectAll} style={styles.actionBtn}>
          {allCompleted ? "전체 해제" : "전체 선택"}
        </button>
        <button onClick={handleDeleteSelected} style={styles.deleteAllBtn}>
          삭제
        </button>
      </div>
      <ul style={styles.list}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(({ id, text, completed, date }) => (
            <li
              key={id}
              style={{
                ...styles.item,
                bakcgroundColor: completed ? "#f3f3f3" : "#fff",
              }}
            >
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
              />
              <div style={styles.textWrapper}>
                <span
                  style={{
                    ...styles.text,
                    textDecoration: completed ? "line-through" : "none",
                    color: completed ? "#aaa" : "#000",
                  }}
                >
                  {text}
                </span>
                <span style={styles.date}>{date}</span>
              </div>
              {/* <button onClick={() => deleteTodo(id)} style={styles.deleteBtn}>
                삭제
              </button> */}
            </li>
          ))
        ) : (
          <p style={{ color: "#999" }}>검색 결과가 없습니다.😅</p>
        )}
      </ul>
    </div>
  );
}
const styles = {
  container: {
    fontFamily: "'Noto Sans KR', sans-serif",
    maxWidth: "420px",
    margin: "60px auto",
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #f7f8fa, #e9ecf3)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "22px",
    color: "#333",
    margin: "4px 0 20px",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    margin: 0,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#444",
    margin: "20px 0 10px",
  },
  inputRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    width: "80%",
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  searchInput: {
    width: "90%",
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
    transition: "all 0.2s ease",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "10px 12px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
  },
  textWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "10px",
  },
  text: {
    fontSize: "16px",
    textAlign: "left",
  },
  date: {
    fontSize: "12px",
    color: "#999",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    color: "#e74c3c",
    fontSize: "16px",
    cursor: "pointer",
    transition: "color 0.2s ease",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  addBtn: {
    backgroundColor: "#007bff",
    width: "20%",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
  },
  actionBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },
  deleteAllBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    marginLeft: "280px",
    marginBottom: "20px",
  },
};
