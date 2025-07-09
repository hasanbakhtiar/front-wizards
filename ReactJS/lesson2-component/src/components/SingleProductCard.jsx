import { Component } from 'react'

class SingleProductCard extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card" >
                    <img height={300} src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <a href="#" className="btn btn-primary">${this.props.price}</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default SingleProductCard