import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteProduct } from "../../tool/actions/productAction";
import slugify from "slugify";

const Dashboard = () => {
    const products = useSelector(p => p.product);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1 className="my-5">Dashboard</h1>
                <div className="col-7">
                    <Link className="btn btn-dark my-2" to="/dashboard/product/add"> Add new product</Link>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...products].reverse().map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td><img style={{ width: "120px", objectFit: "contain" }} src={item.image} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><Link to={`/dashboard/product/edit/${slugify(item.title,{lower:true})}`} className="btn btn-warning">Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={() => {dispatch(deleteProduct({id:item.id})) }}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Dashboard