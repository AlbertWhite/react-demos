import * as actions from './index'

//test with actions
describe('todo actions', () => {
	it('addCount should create ADD action', () => {
		expect(actions.add(100)).toEqual({
			type: 'ADD',
			number: 100
		})
	})
})