import changeCharacterFolderName from '../changeFolderName'

// eslint-disable-next-line import/first
import * as fs from 'fs'

jest.mock('fs', () => ({
  renameSync: jest.fn()
}))
test('changeFolderName.tsのテスト', async () => {
  const result = await changeCharacterFolderName('oldPath', 'newPath')
  expect(result).toBe('名前変更が完了しました')
  expect(fs.renameSync).toHaveBeenCalledTimes(1)
  expect(fs.renameSync).toHaveBeenCalledWith('./character/oldPath', './character/newPath') // (4): モックが呼ばれたか検証
})
