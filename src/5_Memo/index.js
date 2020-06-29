import React, { Component } from 'react'
// import './memoize';


const Child = React.memo(({ name } ) => {
    console.log('child rerender');
    return(
        <div>
            Username: {name}
        </div>
    )
});

class MemoDemo extends Component{

    state = { 
        name: 'Dexter' 
    }

    componentDidMount(){
        this.timer = setInterval( () => {
            this.setState({name: 'Dexter'});
        }, 1000 );
    }

    customNameChange = () => {
        clearInterval( this.timer );
        this.setState({ name: 'Debra'});
    }

    render(){
        const { name } = this.state;
        console.log('render component')
        return(
            <div>
                <h1> Pure demo </h1>
                <button onClick={this.customNameChange}>  Change name  </button>
                <Child name={name}/>
            </div>
        )
    }

}


export default MemoDemo;