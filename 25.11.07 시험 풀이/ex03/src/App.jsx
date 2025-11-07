import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (err) {
      if (err.response) setError(`서버 오류 (${err.response.status})`);
      else if (err.request) setError("서버 응답이 없습니다.");
      else setError(`요청 오류 : ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedUserId((prev) => (prev === id ? null : id));
  };
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>사용자 목록</h1>
        <input
          type="text"
          placeholder="Looking for someone?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button
          style={{
            ...styles.refreshButton,
            backgroundColor: isHover ? "navy" : "#007bff",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={fetchUsers}
        >
          🔄새로고침
        </button>
      </header>

      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중. . .</p>
        </div>
      )}

      {!loading && error && (
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>⚠️{error}</p>
          <button onClick={fetchUsers} style={styles.retryButton}>
            다시 시도
          </button>
        </div>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <div style={styles.userGrid}>
          {filteredUsers.map((user) => {
            const expanded = expandedUserId === user.id;
            return (
              <div
                key={user.id}
                style={{
                  ...styles.userCard,
                  backgroundColor: expanded ? "#e8f0ff" : "white",
                }}
                onClick={() => toggleExpand(user.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                }}
              >
                {!expanded ? (
                  <>
                    <div style={styles.userAvatar}>{user.name.charAt(0)}</div>
                    <h3 style={styles.userName}>{user.name}</h3>
                  </>
                ) : (
                  <div style={{ marginTop: "1rem" }}>
                    <p style={styles.userEmail}>📧{user.email}</p>
                    <p style={styles.userCompany}>🏢{user.company.name}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#333",
    fontSize: "2rem",
  },
  searchInput: {
    flex: 1,
    maxWidth: "300px",
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "25px",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    backgroundColor: "white",
  },
  refreshButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: { marginTop: "1rem", fontSize: "1.2rem", color: "#666" },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  errorText: { color: "#dc3545", fontSize: "1.2rem", marginBottom: "1rem" },
  retryButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  userCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    textAlign: "center",
  },
  userAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 auto 1rem",
  },
  userName: { margin: "0.5rem 0", color: "#333", fontSize: "1.2rem" },
  userEmail: { color: "#666", fontSize: "0.9rem", margin: "0.5rem 0" },
  userCompany: { color: "#888", fontSize: "0.85rem", margin: "0.5rem 0" },
  emptyText: { fontSize: "1.2rem", color: "#999" },
};
