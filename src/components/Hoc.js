import React, { Component } from 'react';

function Kaikeba(props) {
  return (
    <div>
      {props.stage} - {props.name}
    </div>
  );
}

const WithName = Comp => {
  return props => <Comp {...props} name="react高阶组件" />;
};

const WithRound = Comp => {
  class NewComponet extends Component {
    componentDidMount() {
      console.log('do something');
    }
    render() {
      return <Comp {...this.props} />;
    }
  }

  return NewComponet;
};

export default WithName(WithRound(Kaikeba));
