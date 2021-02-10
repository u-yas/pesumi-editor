import { Page } from '../../../../interfaces/type'

type Props = {
  command: Page
}
/**
 * indexの値をもとにして、pages配列をDroppableでできるようにする
 * @param props
 */
const CommandComponent:React.FC<Props> = (props:Props) => {
  const { command, option, content } = props.command
  return (
    <>
    {command}
    {option}
    {content}
    </>
  )
}

export default CommandComponent
