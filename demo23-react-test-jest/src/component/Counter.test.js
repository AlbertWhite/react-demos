import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PureCounter } from './Counter'

//Enzyme has made changes: https://github.com/airbnb/enzyme#upgrading-from-enzyme-2x-or-react--16
Enzyme.configure({ adapter: new Adapter() })

//set up function for component
const setup = () => {
	//pass dispatched action into component
	const actions = {
		addValue: jest.fn()//use jest mock function
	}

	//pass wrapper of the component
	const component = shallow(
		<PureCounter {...actions}/>
	)

	//return wrapper and action
	return{
		component,
		actions
	}
}

describe("should render self and subcomponents",()=>{
	const {component} = setup()
	
	it("should render input",()=>{
		//use find selector to find subcomponent
		//all from the api of enzyme, like text(), prop(), find()
		expect(component.find('input').prop('type')).toEqual("text")
	})

	it("should render button",()=>{
		//use text() but not innerText, it is not javascript
		expect(component.find('button').text()).toEqual("Add value")
	})

})

//simulate button click event

// describe("Counter component", ()=>{
// 	it('should call addValue', ()=>{
// 		const {component, actions} = setup()
// 		const input = component.find('input')

////always have problem here: input variable always unknown in the click event in Counter.js

// 		component.find('button').simulate('click',{target:{input: input}})//if params from event in function
// 		expect(actions.addValue).toBeCalled()
// 	})
// })