import { Application } from 'spectron'
import assert from 'assert'
// applicationのpathを書く
const app = new Application({ path: '' })

app.start().then(() => {
  // windowが見えているかの確認
  return app.browserWindow.isVisible()
}).then(isVisible => {
  assert.strictEqual(isVisible, true)
})
