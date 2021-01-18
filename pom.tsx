import { useLayoutEffect, useState } from 'react'

export default function Pom ():React.FC {
  const [RenderState, setRenderState] = useState<React.FC>(<div></div>)
  const [hogecondition, setHogeCondition] = useState(false)

  useLayoutEffect(() => {
    setRenderState(hogecondition ? <div>peke</div> : <div>pom</div>)
  }, [hogecondition])

  return (
    <div>
      {RenderState}
    </div>
  )
}
