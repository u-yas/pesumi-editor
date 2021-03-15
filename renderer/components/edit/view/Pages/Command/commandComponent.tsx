import { Page } from '../../../../../interfaces/projectType'

type Props = {
  command: Page
}
/**
 * indexの値をもとにして、pages配列をDroppableでできるようにする
 * @param props
 */
const CommandComponent:React.FC<Props> = (props:Props) => {
  const { id, command, content } = props.command
  return (
    <>
    {id}
    {command}
    {content}
    </>
  )
}

export default CommandComponent
