import { Component } from 'react';
import Swal from 'sweetalert2';
import laptopImg from './assets/img/laptop.jpg';
class Counter extends Component {
  constructor(props) {
    super(props);
    // this.increment = this.increment.bind(this);
    this.state = {
      count: 1,
      price:3000
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count <= 1) {
      Swal.fire({
        title: 'Warning',
        icon: 'warning',
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div className="container mt-5 ">
        <div>
          <img width={200} src={laptopImg} />
          <h3>Asus ZenBook 14 - <span className='text-light bg-dark p-3 rounded-2'>{this.state.price*this.state.count}AZN</span></h3>
        </div>
        <div>
          <button className="btn btn-danger" onClick={this.decrement}>
            -
          </button>
          <span className="mx-2">{this.state.count}</span>
          <button className="btn btn-success" onClick={this.increment}>
            +
          </button>
        </div>

      </div>
    );
  }
}

export default Counter;
