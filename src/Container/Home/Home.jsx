import React, {Component, Fragment} from 'react';
import Product from '../Product/Product';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';
import {  BrowserRouter as Router ,Route, Routes} from "react-router-dom";
  


class Home extends Component{
    // state = {
    //     showComponent: true
    // }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             showComponent: true
    //         })
    //     }, 15000);
    // }
    render(){
        return(
            <Router>
                {/* <div className='text-center'> */}
                    {/* <h4>Youtube Component</h4> */}
                    {/* <hr />
                    {
                        this.state.showComponent
                        ?
                        <LifeCycleComp/>
                        : null
                    } */}
                    <Routes>
                        <Route path='/' exact element={<BlogPost/>}/>
                        <Route path='/life' element={<LifeCycleComp/>}/>
                        <Route path='/product' element={<Product/>}/>
                    </Routes>
                    {/* <YoutubeComponent
                        time="12.00"
                        />
                    <Product/>
                    <BlogPost></BlogPost> */}
                {/* </div> */}

            </Router>
        )
    }
}

export default Home;