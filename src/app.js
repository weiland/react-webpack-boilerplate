import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className='myapp'>
        bye {this.props.name}
      </div>
    );
  }
}

export default App;

