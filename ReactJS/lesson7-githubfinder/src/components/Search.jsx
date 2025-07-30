import { useState } from 'react';

const Search = ({sendValue}) => {
  const [keyword, setKeyword] = useState('');
  const formSubmited = (e) => {
    e.preventDefault();
    if (!keyword) {
      alert("Please fill input")
    } else {
      sendValue(keyword);
    }
  };
  return (
    <div className="mt-5 d-flex align-items-center justify-content-center flex-column">
      <div className="col-5">
        <form onSubmit={formSubmited} className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-dark" type="submit" id="button-addon2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
