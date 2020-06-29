import React from 'react';
// PropTypes Импортится как отедльная библиотека
import PropTypes from 'prop-types';

const CompWithPropTypes = ( props ) => {
    console.log(props);
    return(
        <div>
            <h2>I have props</h2>
            <div>
                {
                    props.children
                }
            </div>
        </div>
    );
};

CompWithPropTypes.propTypes = {
    // https://github.com/facebook/prop-types
    // Primitives
    children: PropTypes.element.isRequired,
    stringProp: PropTypes.string,
    arrayProp: PropTypes.array.isRequired,
    boolProp: PropTypes.bool,
    numberProp: PropTypes.number,
    // Function
    action: PropTypes.func.isRequired,
    // Adavenced
    type: PropTypes.oneOf(['Foo', 'Bar', 'Baz']).isRequired,
    footer: PropTypes.element,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        likes: PropTypes.number
    }),
    smsng: PropTypes.any.isRequired
};

export default CompWithPropTypes;
