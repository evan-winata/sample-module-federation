import React from 'react';
import { Button, Header } from 'uiLibrary/components';

export default () => {
  return (
    <div>
      <h2>This is consumer 2</h2>
      <h2>Button</h2>
      <Button>Sample button</Button>
      <h2>Header</h2>
      <Header>This is the imported header component</Header>
    </div>
  );
};
