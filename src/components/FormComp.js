import React, { Component } from 'react';

function FormCreate(Comp) {
  return class extends Component {
    render() {
      return <Comp {...this.props} />;
    }
  };
}

@FormCreate
class FormComp extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="password" />
        <button>提交</button>
      </div>
    );
  }
}

export default FormComp;
