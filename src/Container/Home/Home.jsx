import React, {Component} from 'react';
import YoutubeComponent from '../../Component/YoutubeComponent/YoutubeComponent';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';


class Home extends Component{
    render(){
        return(
            <div className='text-center'>
                <h4>Youtube Component</h4>
                <LifeCycleComp/>
                <YoutubeComponent
                    time="12.00"
                    />
                <hr />
                <Product/>
            </div>
        )
    }
}

export default Home;