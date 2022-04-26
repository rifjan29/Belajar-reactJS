import React, { Component, Fragment } from 'react'
import Post from '../../Component/Post/Post';
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component{
    state = {
        post: []
    }

    componentDidMount(){
        // fetch('https://rent-cars-api.herokuapp.com/admin/car')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })
            // .then(json => console.log(json))

        axios.get('https://rent-cars-api.herokuapp.com/admin/car')
        .then((result) => {
            // console.log(result.data);
            this.setState({
                post: result.data
            })
        })
    }
    render(){
        return(
            <Fragment>
                    <div className='py-5'>
                        <h1>Blog Post</h1>     
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.post.map(post => {
                                    return <Post title={ post.name } category={ post.category } img={ post.image }/> 
                                })
                            }
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default BlogPost;