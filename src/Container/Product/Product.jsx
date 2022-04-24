import React, {Component, Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component{
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render(){
        return (
           <Fragment>
               <div className="container">
                    <div className="header">
                        <h1>Jumlah checkout</h1>
                        <button type="button" class="btn btn-primary">
                            Notifications <span class="badge bg-secondary count">{this.state.order}</span>
                        </button>
                    </div>
                   <CardProduct onCounterChange={(value)=> this.handleCounterChange(value) }/>
               </div>
           </Fragment>
        )
    }
}

export default Product;