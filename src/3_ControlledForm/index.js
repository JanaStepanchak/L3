import React, { Component } from 'react';
import { Input } from 'Input';
//import { Toggler, TogglerItem } from '../2_AdvancedChilds/toggler';

/*class ControlledForm extends Component{

    state = {
        name: "",
        city: "",
        layout: "left"
    }

    onChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    changeToggler = (value) => () => {
        console.log( this.state );
        this.setState({
            ...this.state,
            layout: value
        })
    }

    render = () => {
        const { name, city, layout } = this.state;
        const { onChange, changeToggler } = this;

        console.log('[Render]');
        return(
            <form>
                <input name="name" value={name} onChange={onChange} />
                <input name="city" value={city} onChange={onChange} />
                
                <Toggler label="Layout" value={layout} action={changeToggler}>
                    <TogglerItem value="left" />
                    <TogglerItem value="center" />
                    <TogglerItem value="right" />
                </Toggler>
            </form>   
        )
    }
}*/

class ControlledForm extends Component{
    
        state = {
            type: "text",
            placeholder:"текст для..",
            value: "",
            onChangeHandler: null,
            name: "Завдання 2:"            
        }

        
    
        handler = (e) => {
            let {  value } = e.target;
            console.log(e.target);
          /*  this.setState({
                [name]: value
            });*/
        }
    
            
        render = () => {
            const { name, type, placeholder, value } = this.state;
            const { handler } = this;
    
            console.log('[Render]');
            return(
                <form>            
                    <div>{name}</div>                
                    <Input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handler}

                    />                
                </form>   
            )
        }
    }






class UncontrolledForm extends Component {


    onSubmit = (e) => {
        e.preventDefault();
        const { name, city } = e.target.elements;
        console.log(  name.value, city.value  );
    }

    render = () => {
        console.log('[Render]');
        return(
            <form onSubmit={this.onSubmit}>
                <input name="name" />
                <input name="city" />

                <button type="submit"> Send Data </button>
            </form> 
        )
    }
} 

export default ControlledForm;