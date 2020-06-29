import React from 'react'


export const Toggler = ({ children, label, action, value }) => {
    return(
        <div>
            <div>{ label }</div>
            <div className="togglerContainer">
                {
                    React.Children.map( children, ( ChildItem ) => {
                        if( React.isValidElement( ChildItem ) ){
                            return React.cloneElement( ChildItem, {
                                action: action,
                                active: ChildItem.props.value === value
                            })
                        } else {
                            console.error('Element not valid', ChildItem );
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )


}


export const TogglerItem = ({ action, value, active}) => {
    return(
        <button 
            type="button"
            onClick={action(value) }
            className={ active ? "togglerItem active" : "togglerItem"} >
            {value}
        </button>
    )
}