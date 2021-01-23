import { Node, Page } from '../type'

const reorder = (list:any[], startIndex:number, endIndex:number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const onDragEnd = (result) => {
  if (!result.destination) {
    return
  }

  if (result.type === 'NODE') {
    console.log(reult)
    const node = reorder(

    )
  }
}
