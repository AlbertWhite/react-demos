import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()

    this.state = {
      items: [
        
      ],
      hasError: false,
      isLoading: false
    }
  }

  fetchData(url){
    this.setState({isLoading: true})
    
    //use fetch polyfill (npm install whatwg-fetch) as a http request handler
    fetch(url)
      .then((response) => {
        if(!response.ok){//response.ok field, return true of false
          throw Error(response.statusText)
        }
        this.setState({isLoading: false})

        return response
      })
      .then(
        (response)=>(response.json()) //if get json, use .json() to format
      )
      .then(
        (response)=>{this.setState({items: response})}
      )
      .catch(()=>this.setState({hasError: true}))
  }

  componentDidMount(){
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {

    if(this.state.hasError){
      return <p>Sorry! There is error in this page</p>
    }

    if(this.state.isLoading){
      return <p>On loading</p>
    }

    return (
      <div className="App">
        {
          this.state.items.map((item)=>{
          return <div key={item.id}>{item.label}</div>
          })
        }
      </div>
    );
  }
}

export default App;
