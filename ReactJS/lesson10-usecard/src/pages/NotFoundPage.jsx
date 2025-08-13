import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Link to={'/'}><img src="https://cdn.svgator.com/images/2024/04/walking-investigator-animation-in-404-error-page.gif" /></Link>
    </div>
    </>
  );
};
export default NotFoundPage;
