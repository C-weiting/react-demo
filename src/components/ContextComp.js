import React, { Component } from 'react'

const Context = React.createContext()
const store = {
  name: '开课吧',
  sayHello() {
    console.log('hello')
  }
}

const WithProvider = Comp => props => (
  <Context.Provider value={store}>
    <Comp {...props} />
  </Context.Provider>
)

const WithConsumer = Comp => props => (
  <Context.Consumer>
    {value => <Comp {...props} value={value} />}
  </Context.Consumer>
)

@WithConsumer
class SubComp extends Component {
  render() {
    return <p onClick={this.props.value.sayHello}>{this.props.value.name}</p>
  }
}

@WithProvider
class ContextComp extends Component {
  render() {
    return (
      <div>
        {/* <Context.Provider value={store}>
          <Context.Consumer>
            {value => <p onClick={value.sayHello}>{value.name}</p>}
          </Context.Consumer>
        </Context.Provider> */}
        <SubComp />
      </div>
    )
  }
}

export default ContextComp
