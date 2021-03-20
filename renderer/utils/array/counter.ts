import { Page } from '../../interfaces/projectType'

/**
 * 指定したページの総文字数を取得する
 * @type page[]
 * @returns totalTextSize number
 */
export const sumOfTextLength = (pages:Page[]):number => {
  let sum = 0
  pages.forEach((page) => {
    sum = sum + page.content.length
  })
  return sum
}
