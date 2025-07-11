import React, { Component } from 'react'

export class BasicSlider extends Component {
    constructor(props){
        super(props);
        this.state={
            img:"https://paultan.org/image/2022/09/2023-BMW-XM-debut-70-e1674696541854.jpg"
        }
    }
  render() {
    return (
      <div>
        <img width={500} src={this.state.img} alt="" />
        <button onClick={()=>{
            this.setState({
                img:"https://paultan.org/image/2022/09/2023-BMW-XM-debut-70-e1674696541854.jpg"
            })
        }}>prew</button><button onClick={()=>{
            this.setState({
                img:"https://cdn.bmwblog.com/wp-content/uploads/2023/06/2024-BMW-530e-1.jpg"
            })
        }}>next</button>
      </div>
    )
  }
}

export default BasicSlider