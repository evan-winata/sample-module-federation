import React from 'react';
import { Button, Header } from 'uiLibrary/components';

export default () => {
  return (
    <div>
      <h2>What's happening here?</h2>
      <div>The following are components that are imported from sample-lib project. Take note that the component is imported during runtime. If you change the component on the sample-lib and refresh the consumer app page, the new component will be displayed without the rebuilding of the consumer app.</div>
      <h2>Button</h2>
      <Button>Sample button</Button>
      <h2>Header</h2>
      <Header>This is the imported header component</Header>
    </div>
  );
};
