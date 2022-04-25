import React, { Component } from 'react';

class LifeCycleComp extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return true;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        return(
            <button className='btn btn-info'>Component button</button>
        )
    }
}

export default LifeCycleComp;