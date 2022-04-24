import React from 'react';
import './YoutubeComponent.css';


const YoutubeComponent = (props) => {
    return (
       <div className="row m-5">
           <div className="col-md-6">
                <div className='card'>
                    <div className="card-body p-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolore sequi, cupiditate maxime fugit optio aperiam facere quos iure a nihil dolores, magni provident fugiat ratione cum iusto, beatae dignissimos?</p>
                        waktu : <strong>{ props.time }</strong>
                    </div>
                </div>
           </div>
           <div className="col-md-6">
                <div className='card'>
                    <div className="card-body p-3">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dolore sequi, cupiditate maxime fugit optio aperiam facere quos iure a nihil dolores, magni provident fugiat ratione cum iusto, beatae dignissimos?</p>
                        waktu : <strong>{ props.time }</strong>
                    </div>
                </div>
           </div>
       </div>
    )
}

YoutubeComponent.defaultProps={
    time: '00.00'
}

export default YoutubeComponent;