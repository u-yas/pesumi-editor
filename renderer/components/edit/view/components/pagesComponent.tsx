import * as Type from '../../../../utils/type'

type Props = {
  page: Type.Page
}
/**
 * indexの値をもとにして、pages配列をDroppableでできるようにする
 * @param props
 */
const PagesComponent:React.FC<Props> = (props:Props) => {
  const { command, option, content } = props.page
  return (
    <>
    {command}
    {option}
    {content}
    </>
  )
}

export default PagesComponent
