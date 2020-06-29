import React, { Component } from 'react'
import uniqid from 'uniqid';


const largeArray = Array.from({ length: 1000 }, () => ({
    id: uniqid('item-'),
    name: Math.floor( Math.random() * 400)
}));

const ListItem = React.memo(({ item, removeAction }) => {
    console.log('[render item]', item.name );
    return(
        <li>
            <span>{item.name}</span>
            <button onClick={removeAction(item.id)}> - </button>
        </li>
    )
});

class KeysDemo extends Component{

    state = {
        title: '',
        data: largeArray
    }

    changeHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    addItem = () => {
        this.setState({
            data: [
                {
                    id: uniqid('item-'),
                    name: this.state.title 
                },
                ...this.state.data,
            ]
        })
    }

    removeItem = ( id ) => _ => {
        const raw = [...this.state.data];
        const removedData = raw.filter( item => item.id !== id );
        this.setState({
            data: removedData 
        })

    } 


    render = () => {
        const { data, title } = this.state;
        return(
            <div>
                <h2> Keys demo </h2>
                <input value={title} onChange={this.changeHandler} />
                <button onClick={this.addItem}> Add! </button>
                <ul>
                        {
                            data.map( (item, index) => <ListItem key={item.id} item={item} removeAction={this.removeItem} />)
                        }
    
    
                </ul>
            </div>
        )

    }

}

export default KeysDemo;