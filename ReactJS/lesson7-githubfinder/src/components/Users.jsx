import SingleCard from './SingleCard';
const Users = ({ usersdata }) => {
  return (
    <div className="container">
      <div className="row g-5 mt-5">
        {usersdata.map((item) => (
          <SingleCard key={item.id} alldata={item} />
        ))}
      </div>
    </div>
  );
};
export default Users;
