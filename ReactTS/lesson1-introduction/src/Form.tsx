import type { propsType } from "./customTypes/formType";

const Form: React.FC<propsType> = ({ placeHolder, inputType }) => {
  const formSubmited = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={formSubmited}>
        <input type={inputType} placeholder={placeHolder} />
        {inputType === "file" ? "" : <button>send</button>}
      </form>
    </div>
  );
};

export default Form;
