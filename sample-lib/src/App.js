import React from 'react';
import Button from './components/Button';
import Header from './components/Header';

export default () => {
  return (
    <div>
      <h1>
        Sample UI library - this project is the remote library for other consumer apps.
      </h1>
      <h2>
        Button component
      </h2>
      <div>
        <Button>This the button component</Button>
      </div>
      <h2>
        Header component
      </h2>
      <div>
        <Header>This the header component</Header>
      </div>
    </div>
    
  );
};
