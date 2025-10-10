import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const UseMemoApp = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);

  const userRows = () => {
    console.log("list running");
    return user.map((item) => (
      <li onClick={() => setEmail(item.email)} key={item.id}>
        {item.name}
      </li>
    ));
  };

  const userRowsMemo = useMemo(() => userRows(), [email]);

  return (
    <div>
      {email}
      <div>{userRowsMemo}</div>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log("count is running");
        }}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("count is running");
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseMemoApp;
