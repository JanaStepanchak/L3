import React, { Component, PureComponent } from 'react'

/*
    Pure component использует механику shallowequal
    Это не грубокое сравнение всех значений обьектов.

    Вот  так это выглядит в компоненте PureComponent:
    shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);
    
    const object = { 'user': 'fred' };
    const other = { 'user': 'fred' };

    shallowequal(object, other); // → true

    const data = {
        name: 'Dexter',
        data: [1,2,3,4]
    }

    const nextdata =  {
        name: 'Dexter',
        data: [1,2,3]
    }
    shallowequal(data, nextdata); // → true

    https://www.npmjs.com/package/shallowequal
    (В реакте не конкретно эта библиотека испольуеться - у них все свое, но  под капотом :) )

    К этому же месту можно отнести вопрос про shallow compare => это механика поверхнотного сравнения в объектах, которая
    работала в старых версиях реакта.
    Сегодня заменена на 
        PureComponent (Class, 16.6)
        ReactMemo (Functional, 16.8)
*/

class Child extends PureComponent {
    render = () => {
        console.log('child rerender');
        const { name } = this.props;
        return(
            <div>
                Username: {name}
            </div>
        )
    }
}


class Parent extends Component{

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

export default Parent;