import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    number: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
    number: false,
  });

  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    const trimmed = name.trim();
    const nameRegex = /^[가-힣a-zA-Z\s]{2,}$/;
    return nameRegex.test(trimmed);
  };

  const validateNumber = (number) => {
    const numberRegex = /^010-?\d{4}-?\d{4}$/;
    return numberRegex.test(number);
  };

  const getErrors = () => {
    const errors = {};

    if (touched.email && formData.email && !validateEmail(formData.email)) {
      errors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (
      touched.password &&
      formData.password &&
      !validatePassword(formData.password)
    ) {
      errors.password =
        "비밀번호는 8자 이상, 대문자+소문자+숫자를 포함해야 합니다";
    }

    if (
      touched.confirmPassword &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }

    if (touched.name && formData.name && !validateName(formData.name)) {
      errors.name = "올바른 이름 형식이 아닙니다.";
    }

    if (touched.number && formData.number && !validateNumber(formData.number)) {
      errors.number = "전화번호 형식을 다시 확인하세요.";
    }
    return errors;
  };
  const errors = getErrors();

  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.password === formData.confirmPassword &&
      validateName(formData.name) &&
      validateNumber(formData.number)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        alert(
          `회원가입 성공!!\n\n이름: ${formData.name}\n이메일:${formData.email} `
        );
        console.log("회원가입 데이터", formData);

        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          name: "",
          number: "",
        });
        setTouched({
          email: false,
          password: false,
          confirmPassword: false,
          name: false,
          number: false,
        });
      }, 800);
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: success ? "#c8f7c5" : "#f0f2f5",
        transition: "background-color 0.8s ease",
      }}
    >
      <div style={styles.formCard}>
        <h1 style={styles.title}>회원가입</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              이메일 *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.email ? "#dc3545" : "#ddd",
              }}
              placeholder="exemple@email.com"
            />
            {errors.email && <p style={styles.errorText}> ❌ {errors.email}</p>}
            {touched.email && !errors.email && formData.email && (
              <p style={styles.successText}> ✅ 올바른 이메일 형식입니다</p>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 *</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  borderColor: errors.password ? "#dc3545" : "#ddd",
                }}
                placeholder="8자 이상, 영문+숫자"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p style={styles.errorText}>❌ {errors.password}</p>
            )}
            {touched.password && !errors.password && formData.password && (
              <p style={styles.successText}>✅ 안전한 비밀번호입니다</p>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 확인 *</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.confirmPassword ? "#dc3545" : "#ddd",
              }}
            />
            {errors.confirmPassword && (
              <p style={styles.errorText}>❌ {errors.confirmPassword}</p>
            )}
            {touched.confirmPassword &&
              !errors.confirmPassword &&
              formData.confirmPassword && (
                <p style={styles.successText}>✅ 비밀번호가 일치합니다.</p>
              )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>이름 *</label>
            <input
              type="text"
              name="name"
              placeholder="홍길동"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.name ? "#dc3545" : "#ddd",
              }}
            />
            {errors.name && <p style={styles.errorText}>❌ {errors.name}</p>}
            {touched.name && !errors.name && formData.name && (
              <p style={styles.successText}>✅ 유효한 이름입니다</p>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>전화번호 *</label>
            <input
              type="text"
              name="number"
              placeholder="010-1234-1234"
              value={formData.number}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.number ? "#dc3545" : "#ddd",
              }}
            />
            {errors.number && (
              <p style={styles.errorText}>❌ {errors.number}</p>
            )}
            {touched.number && !errors.number && formData.number && (
              <p style={styles.successText}>✅ 유효한 전화번호입니다</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid()}
            style={{
              ...styles.submitButton,
              backgroundColor: isFormValid() ? "#28a745" : "#ccc",
              cursor: isFormValid() ? "pointer" : "not-allowed",
            }}
          >
            가입하기
          </button>
        </form>
      </div>
      {success && <div style={styles.successAnimation}></div>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  formCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "2rem",
    fontSize: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    color: "#333",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  successText: {
    color: "#28a745",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  submitButton: {
    padding: "14px",
    fontSize: "1.1rem",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "1rem",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
  successAnimation: {
    transition: "background-color 0.5s ease",
  },
};
