import { Button } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'
const MyButton:React.FC = () => {
  return (
    <>
     <Button backgroundColor='blackAlpha.400'>ここおして</Button>
    </>
  )
}
export default {
  title: 'Parts/Button',
  component: MyButton
} as Meta

const Template: Story = (args) => <MyButton {...args}/>

export const Black = Template.bind({})
Black.args = {
}
