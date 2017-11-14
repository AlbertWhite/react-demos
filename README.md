A collection of react demos. Trying to understand how to think to React.

## demo1
It is like a observer pattern, parent pass a function as an attribute to child. Child listen to change, and use the function passed from parent to change value.

Task: Get number from Input component, show the percentage in PercentageShower component. Include Input and PercentageShower components inside PercentageApp.

[Code](https://github.com/AlbertWhite/react-demos/blob/master/demo01/index.html)

##demo13
Some problems with Demo13-rodolist-redux. I tried to use only redux (not react-redux), and seperate components in different files.
It is possible to call store.dispatch in child component, but it is not a good practice (take a look here: https://github.com/reactjs/redux/issues/916). This is why we need connect in react-redux to connect store to child component.

Here remains one problem need to figure out after: in store.dispatch(), can I pass a variable inside, and pass store.dispatch(variable) as a prop to the child component.

##demo15
Example learned from https://github.com/reactjs/react-router-tutorial.
How to run:
1. npm install
2. npm start