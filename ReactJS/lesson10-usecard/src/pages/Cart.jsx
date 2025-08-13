import { Button, Container, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const { isEmpty,cartTotal, items, updateItemQuantity, removeItem,emptyCart } =
    useCart();

  if (isEmpty) return <p className="h1 text-center my-5">Your cart is empty</p>;
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h2 className="my-5">Yout Cart</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Single price</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} width={70} />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                    }
                    variant="danger"
                  >
                    -
                  </Button>
                  <span className="mx-3" style={{ fontSize: '17px' }}>
                    {item.quantity}
                  </span>
                  <Button
                    onClick={() =>
                      updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                    }
                    variant="success"
                  >
                    +
                  </Button>
                </td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
                <td>
                  <Button onClick={() => removeItem(item.id)} variant="danger">X</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    <p className='h2 mt-5'>Total amount: <b className='text-danger'>${cartTotal}</b></p>
    <Button onClick={()=>{emptyCart()}} className='btn btn-danger '>All Clear</Button>
    </Container>
  );
};

export default Cart;
