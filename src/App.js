import React, { Component } from 'react';

// import PropTypesDemo from './1_PropTypes';
// import AdvancedChild from './2_AdvancedChilds';
import { Toggler, TogglerItem } from './2_AdvancedChilds/toggler';
//import ControlledForm from './3_ControlledForm';

// import PureComponent from './4_Pure';
// import MemoComponent from './5_Memo';

//import KeysDemo from './6_Keys';

import './App.css';

const Message = ({ message }) => (<h1>{ message }</h1>)

class App extends Component {

	state = {
		layout: "left",
		gender: "male"
	}

	changeGender = ( value ) => (e) => {
		this.setState({
			gender: value
		});
	}

	changeLayout = ( value ) => (e) => {
		this.setState({
			layout: value
		});
	}

	render = () => {
		const { layout, gender } = this.state;
		const { changeGender, changeLayout } = this;
		return(
			<div className="wrapper" >
				{/* <PropTypesDemo
					stringProp="Blablabla"
					arrayProp={[1,2,3,4]}
					boolProp={true}
					numberProp={1}
					action={ () => console.log(123) }
					type="Foo"
					footer={ <Message /> }
					user={{
						name: "Test",
						likes: 0
					}}
					smsng={ true }
				>
					<Message />
				</PropTypesDemo> */}
	
				{/* <AdvancedChild>
					<Message message="First" />
					<Message message="Second" />
					<Message message="Third" />
					{ true }
					{ Infinity }
				</AdvancedChild> */}
				
				{/*<Toggler value={param} label="Counter" action={changeHandler}>
					<TogglerItem value="one" />
					<TogglerItem value="two" />
					<TogglerItem value="three" />
					<TogglerItem value="four" />
				</Toggler> */}
				<h2> Завдання 1: </h2>
				
				<Toggler value={gender} label="Gender" action={changeGender}>
						<TogglerItem value="male" />
						<TogglerItem value="female" />	
				</Toggler>

				<Toggler value={layout} label="Layout" action={changeLayout}>		
						<TogglerItem value="left" />
						<TogglerItem value="center" />
						<TogglerItem value="right" />
						<TogglerItem value="baseline" />				
				</Toggler>

				{/*<h2> Завдання 2: </h2>
				<ControlledForm />  */}

				

				{/* <PureComponent /> */}
				{/* <MemoComponent /> */}

				{/*<KeysDemo />*/}
			</div>
		)
	}
}

export default App;
