import { LinkContainer } from "react-router-bootstrap";
import type { arrType } from "./customTypes/formType";
import Form from "./Form";
const myArr: arrType[] = [
  {
    title: "Asus Zenbook",
    price: 11,
  },
  {
    title: "Lenovo Yoga",
    price: 555,
  },
];
console.log(myArr);

const App = () => {
  return (
    <div>
      <Form placeHolder="Enter name" inputType="text" />
      <Form placeHolder="Enter age" inputType="number" />
      <Form placeHolder="Enter file" inputType="file" />
      {myArr.map((item: arrType, index: number) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
};

export default App;
