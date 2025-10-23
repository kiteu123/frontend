import React, { useRef, useState } from "react";
import UserList2 from "./UserList2";
import CreateUser from "./CreateUser";

export default function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@email.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers(users.concat(user)); // 새로운 유저 추가
    setInputs({
      username: "",
      email: "",
    }); // 입력창 초기화
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    //1.setUser를 호출하여 users 상태 업데이트 시작
    setUsers(
      //2. 기존의 users 배열을 순회하여 새로운 배열 생성
      users.map((user) =>
        //3. 현재 순회중인 user.id가 전달받은 id와 일치하는지 확인
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  //일치하면(O) 해당 user 객체의 active 속성만 토글하여 새로운 객체 생성
  //일치하지 않으면(X) 해당 user 객체는 그대로 반환
  //active:!user.active -> active 값을 반대로 뒤집기 true->flase로 false->true로
  // 👇 이 부분이 새로 추가된 테스트용 state입니다.
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "UserList 숨기기" : "UserList 보이기"}
      </button>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />  */}
      {visible && (
        <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />
      )}
    </div>
  );
}
