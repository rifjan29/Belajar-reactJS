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
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     });
        // }, 5000);
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps', nextProps);
        console.log('nextState',  nextState);
        if (nextState.count >= 4) {
            return false;
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <button className='btn btn-info' onClick={this.changeCount}>Component button { this.state.count }</button>
        )
    }
}

export default LifeCycleComp;