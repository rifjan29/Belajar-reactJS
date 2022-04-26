import { React } from 'react'

const Post = (props) => {
        return(
            <div className="col-md-6 p-3">
                <div className="card">
                    <img src={ props.img } alt="" />
                    <div className="card-body">
                        <h5 className='title'>{ props.title }</h5>
                        <small className='category'>{ props.category }</small>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ad quibusdam deserunt! Atque beatae aliquam vel. Ex porro laboriosam perferendis reprehenderit dolore, corrupti dolores debitis! Incidunt ut sapiente impedit tempora.</p>
                    </div>
                </div>
            </div>
    
        )
}

export default Post;