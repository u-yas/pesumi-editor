import { Application } from 'spectron'
import assert from 'assert'
// applicationのpathを書く
const app = new Application({ path: '' })

app.start().then(() => {
  // windowが見えているかの確認
  return app.browserWindow.isVisible()
}).then(isVisible => {
  assert.strictEqual(isVisible, true)
}).then(async function () {
  // Get the window's title
  return await app.client.getTitle()
}).then(function (title) {
  // Verify the window's title
  assert.strictEqual(title, 'My App')
}).then(async function () {
  // Stop the application
  return await app.stop()
}).catch(function (error) {
  // Log any failures
  console.error('Test failed', error.message)
})
