import React from 'react';

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

export default WithName(Kaikeba);
