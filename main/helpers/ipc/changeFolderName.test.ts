import changeCharacterFolderName from './changeFolderName'

jest.mock('fs', () => {
  rename: jest.fn(() => './Character/uya')
})
test('changeFolderName()', () => {
  expect()
})
