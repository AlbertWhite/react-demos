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

## demo15
Example learned from https://github.com/reactjs/react-router-tutorial.
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
Shopping cart example, idea from https://github.com/reactjs/redux/tree/master/examples/shopping-cart
- Try with an action being treated to different reducers (not one to one mapping: https://github.com/pitzcarraldo/reduxible/issues/8)
- Save products with id and use with id (Normalizing state shape: https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html )
- Meet the problem of mutation the old state (https://redux.js.org/docs/Troubleshooting.html)
- Use concat, slice, {...} to avoid array mutation and use object.assign and {...} to avoid object mutataion.(https://egghead.io/lessons/react-redux-avoiding-object-mutations-with-object-assign-and-spread, https://egghead.io/lessons/react-redux-avoiding-array-mutations-with-concat-slice-and-spread)

## demo19
Example from https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react to understand how aync with react works

## demo20
Example from https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react to understand how react-thunk works. redux-logger is added. In order to use fetchapi, need to npm install whatwg-fetch.