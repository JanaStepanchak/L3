import React from 'react'

class Input = ({ element }) => {
 
    return(
        <div>                           
            <input
              type={type}
              placeholder={placeholder}
              onChange={handler}
            />   
        </div>   
    )
    
    Input.defaultProps = {
        element: {
            type: "text",
            placeholder: "placeholder",
            value: "value"
        }
    } 

    export default Input;