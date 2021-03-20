
type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}
const OpenButton:React.FC<Props> = (props:Props) => {
  return (
    <div onClick={() => props.onClick} onKeyDown={() => props.onClick} tabIndex={0} role='button'>
    </div>
  )
}

export default OpenButton
