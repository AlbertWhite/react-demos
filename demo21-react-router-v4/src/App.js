import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom'

const Home = () => (
  <div>Home</div> 
)

const Component1 = () => (
  <div>Component1</div>
)

const Component2 = () => (
  <div>Component2</div>
)

const Component3 = ({match, location, history}) => {
  /*component loaded has three props by default: match, location, history
    match.path => current parent path
    match.url => current parent url
    location.pathname => current full path
  */
  return <div>
    <ul>
      <li><Link to={`${match.url}/subcomponent1`}>Sub Component1</Link></li>
      <li><Link to={`${match.url}/subcomponent2`}>Sub Component2</Link></li>
      <li><Link to={`${match.url}/subcomponent3`}>Sub Component3</Link></li>
    </ul>


    {
      //pass parameter into path with ':param'
      // pass render={(props)=><Component {...props} newProp=''/>} into <Route> to pass props into Component
    }
    <Route exact path={match.url} component={Component3Select}/>
    <Route path={`${match.url}/:id`} render={(props)=> <SubComponent {...props} name='random subcomponent'/>}></Route>
  </div>
}

const Component3Select = () => (  
  <div>Please select component</div>
)

const SubComponent = ({match, name}) => {
  //if pass parameter into the route path, we can get the param in match.params
  return (<div>
    name: {name}
    <br/>
    id: {match.params.id}
  </div>)
}

const NoMatchComponent = () => (
  <div>Sorry we didn't find the page</div>
)

class App extends Component {
  render() {
    return (

      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/component1">Component1</Link></li>
          <li><Link to="/component2">Component2</Link></li>
          <li><Link to="/component3">Component3</Link></li>
        </ul>
        {
          //add exact in Route prevent showing parent div while showing children div
        }
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/component1' component={Component1}></Route>
          <Route path='/component2' component={Component2}></Route>
          <Route path='/component3' component={Component3}></Route>
          <Route component={NoMatchComponent}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
