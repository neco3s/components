import type { ComponentStory, ComponentMeta } from '@storybook/react'
import AutoResizeTextArea from 'components/elements/AutoResizeTextArea'

export default {
  title: 'Elements/AutoResizeTextArea',
  component: AutoResizeTextArea,
} as ComponentMeta<typeof AutoResizeTextArea>

const Template: ComponentStory<typeof AutoResizeTextArea> = (args) => <AutoResizeTextArea {...args} />

export const FiexedPhrase = Template.bind({})
FiexedPhrase.args = {
  id: 'body',
  placeholder: '〇〇さん いつもお世話になっております。',
}
