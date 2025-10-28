import React, { useState } from "react";

export default function App() {
  // const [result, setResult] = useState<number>(0);
  // 배열과 객체 예제

  const numbers: number[] = [1, 2, 3, 4, 5]; // 숫자타입
  const fruits: Array<string> = ["사과", "바나나", "오렌지"]; // 문자열 타입

  // 제네릭 Array<ty성격>

  // 인터페이스
  interface Person {
    name: string;
    age: number;
    email?: string;
    // 선택적 속성
  }
  // Person 인터페이스를 상속(타입상속) person1 객체
  const person1: Person = {
    name: "홍길동",
    age: 30,
    email: "",
  };

  const person2: Person = {
    name: "김철수",
    age: 30,
    email: "kim@examplie.com",
  };

  return (
    <div className="App">
      App
      <header>
        <h1>react Typescript 예제</h1>
      </header>
      <div className="container">
        {" "}
        {/* 기본 타입 섹션 */}
        <section className="card">
          <h2>1. 기본 타입</h2>
          <div className="content">
            <p>
              <strong>name:</strong> {"TypeScript"}
            </p>
            <p>
              <strong>age:</strong> {13}
            </p>
            <p>
              <strong>isActive:</strong> {true ? "true" : "false"}
            </p>
          </div>
        </section>
        <section className="card">
          <h2>2. 배열 </h2>
          <div className="content">
            <p>
              <strong>숫자배열</strong> [{numbers.join(",")}]
            </p>
            <p>
              <strong>과일배열</strong> [{fruits.join(",")}]
            </p>
          </div>
        </section>
        {/* 인터페이스 */}
        <section className="card">
          <h2>3. 인터페이스 </h2>
          <div className="content">
            <div className="person-card">
              <h3>{person1.name}</h3>
              <p>나이 : {person1.age}</p>
              <p>이메일 : {person1.email || "없음"}</p>
            </div>
            <div className="person-card">
              <h3>{person2.name}</h3>
              <p>나이 : {person2.age}</p>
              <p>이메일 : {person2.email || "없음"}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
