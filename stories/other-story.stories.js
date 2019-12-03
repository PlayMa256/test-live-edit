import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import { withEditor } from '@storybook/addon-live-edit/dist/withEditor';

export default {
  title: 'Another story again',
  decorators: [
    withEditor
  ]
};

export const realLife = () => {
  return (
    <div>
      Is this real life?
    </div>
  )
};

realLife.story = {
  name: 'Is this real life?'
};