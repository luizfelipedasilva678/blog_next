import { Story, Meta } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';

export default {
  title: 'Postcard',
  component: PostCard,
  args: {
    slug: 'default-string',
    title: 'default-string',
  },
} as Meta;

export const Primary: Story<PostCardProps> = (args) => (
  <PostCard {...args}></PostCard>
);
