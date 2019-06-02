import React, { Component } from 'react'

const WithName = Comp => {
  return props => <Comp {...props} name="react高阶组件" />
}

const WithRound = Comp => {
  class NewComponet extends Component {
    componentDidMount() {
      console.log('do something')
    }
    render() {
      return <Comp {...this.props} />
    }
  }

  return NewComponet
}

@WithName
@WithRound
class Kaikeba extends Component {
  render() {
    return (
      <p>
        {this.props.stage} - {this.props.name}
      </p>
    )
  }
}

export default Kaikeba
