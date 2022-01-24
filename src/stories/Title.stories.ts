// Title.stories.ts

import { Meta } from '@storybook/angular';

import { Title } from './Title';

export default {

  title: 'Title',
  component: Title,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Title',
    primary: true,
  },
});