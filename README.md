A collection of react demos. 
All the examples are handcoded to make sure it really works. The source of learning is various.

## demo1
It is like a observer pattern, parent pass a function as an attribute to child. Child listen to change, and use the function passed from parent to change value.

Task: Get number from Input component, show the percentage in PercentageShower component. Include Input and PercentageShower components inside PercentageApp.

[Code](https://github.com/AlbertWhite/react-demos/blob/master/demo01/index.html)

## demo13
Some problems with Demo13-rodolist-redux. I tried to use only redux (not react-redux), and seperate components in different files.
It is possible to call store.dispatch in child component, but it is not a good practice (take a look here: https://github.com/reactjs/redux/issues/916). This is why we need connect in react-redux to connect store to child component.

Here remains one problem need to figure out after: in store.dispatch(), can I pass a variable inside, and pass store.dispatch(variable) as a prop to the child component.
- yes: func: (input) => dispatch(ActionCreator(input))

## demo15
Example learned from https://github.com/reactjs/react-router-tutorial.
It use react router v3, not v4.
How to run:
1. npm install
2. npm start

## demo16
Make react-redux and react-router work together.

## demo17
Seperate container component and presentational component,
article from https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Use combine reducers to seperate reducers and data source.

## demo18
Shopping cart example, idea from https://github.com/reactjs/redux/tree/master/examples/shopping-cart It is an entire demo: getting data via fetch api, format them into reducers, interaction in the UI, get and set states in reducer. 
- Try with an action being treated to different reducers (not one to one mapping: https://github.com/pitzcarraldo/reduxible/issues/8)
- Save products with id and use with id (Normalizing state shape: https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html ): Format the source data (domain) in state by "byId:{id1:{}, id2:{}}", it makes it easier in the future if we need to build query interface "getById". In other component related state (entity) we just save id for using and displaying it. 
- Meet the problem of mutation the old state (https://redux.js.org/docs/Troubleshooting.html)
- Use concat, slice, {...} to avoid array mutation and use object.assign and {...} to avoid object mutataion.(https://egghead.io/lessons/react-redux-avoiding-object-mutations-with-object-assign-and-spread, https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)
- A good example for how to formalize data: http://cn.redux.js.org/docs/recipes/reducers/UpdatingNormalizedData.html

## demo19
Example from https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react to understand how aync with react works

## demo20
Example from https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react to understand how react-thunk works. redux-logger is added. In order to use fetchapi, need to npm install whatwg-fetch.
With redux-thunk in reducer, we can use dispatch in dispatch function.

## demo21
Example with react-router-v4, api: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#component
- Create Route with render=(props)=>{<Component(...props, newProp='')/>} or component=
- Use match parameter for creating nested routes and creating/passing parameter in routes 
- Use switch to match the best only result
- <Route component={NoMatchComponent}/>
- <Redirect/> is really confusing! We must use that inside another <Route>. The real redirect to me is in javascript, by 'this.props.history.push(...)'
- react-router use client side route. After building from create-react-app, need to run specific deploy script in order to deploy in different kinds of places/servers. https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment
- Have a question unsolved: in react app, how to use react-router to link to a sub project not in the form of react (no component, just static html files)?

## demo22
Basic demo with github api, idea from https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/real-world
Will make it more interesting with seperating environment, with more functions.

## demo23
Example with redux-example
- Link of basic instruction: https://redux.js.org/docs/recipes/WritingTests.html test with reducer, action creator, component
- API with Enzyme for component testing http://airbnb.io/enzyme/docs/api/mount.html
- Assertion in Jest: https://facebook.github.io/jest/docs/en/expect.html
- Some examples in examples of redux: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/components/ProductItem.spec.js
- Test with shallow rendering with Enzyme: test the dependencies of props for a component -> show / hide the component with certain props

## demo24
Example with redux-saga
- use generator function to handle async function
- Helper function 'takeEvery' listen to dispatched action and use a saga function to handle  eg: takeEvery('ACTION_TYPE', functionName)
- Helper function 'call' call a function which. returns promise. The second parameter is the parameter for the first function. eg: call(delay, 1000). If there are parameters to add in the function, add it as the second parameter.
- Helper function 'put' helps trigger a dispatched action after we get the data. eg: put({action})

- yield **effects** in redux-saga

- generator function: every time we call a next(), the function will stop at yield. The excusion of this function can be stopped and restarted.

## demo25
Example with redux-ui
- no need to write reducers and map prop/dispatch to state
- really useful with ui props (simple logic, read and write)
- three step to use : 1. import uiReducer and combine to root reducer 2. wrap component with UI wrapper, pass UI parameters in the state object as the parameter 3. use this.props.ui and this.props.updateUI to get and set UI props. *no need for write reducers*

## demo26
React-break for responsive https://github.com/nygardk/react-break
Really useful is there are lots of changes in response.

## demo28
From https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html

## demo29
Form wizard example. 
- handleSubmit. With handleSubmit, in the parent component, we can access the submit function (with values) by passing onSubmit as the props. https://redux-form.com/7.2.0/docs/faq/handlevson.md/
- props.initialValues 