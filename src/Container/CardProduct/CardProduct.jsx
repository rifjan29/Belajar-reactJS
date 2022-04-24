import React, {Component, Fragment} from 'react';

class CardProduct extends Component{
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);

        })
        // alert('Tambah data')
    }

    handleMinus = () => {
        if (this.state.order > 0){ 
            this.setState({
                order:this.state.order - 1
            }) 
        }else{
            alert('kurang data')
        }
        // alert('Kurang data')
    }
    render(){
        return (
           <Fragment>
               <div className="container">
                  
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://source.unsplash.com/user/c_v_r" className='img-fluid' alt="" />
                                    <h4>Product title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut nulla laudantium hic harum soluta, rem cupiditate fugiat temporibus vero aspernatur sit quaerat sapiente consequuntur esse quasi corrupti, omnis natus!</p>
                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <button className='btn btn-primary minus' onClick={this.handleMinus}> - </button>
                                    <input type="text" className='form-control px-4 w-50' name="" id="" value={this.state.order} />
                                    <button className='btn btn-success plus' onClick={this.handlePlus}> + </button>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </Fragment>
        )
    }
}

export default CardProduct;