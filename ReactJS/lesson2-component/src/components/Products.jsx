import { Component } from 'react'
import SingleProductCard from './SingleProductCard'
import products from '../data/products'






class Products extends Component {
    render() {
        return (
            <div>
                <div className="row g-3">
                    {products.map(item => (
                        <SingleProductCard 
                        
                        title={item.title} 
                        img={item.img} 
                        price={item.price}
                        desc={item.desc}
                         />

                    ))}

                </div>
            </div>
        )
    }
}

export default Products