import getVueSidebar from './vue'
import getJavaScriptSidebar from './javascript'

function getFrontendSidebar() {
  return [
    getVueSidebar(),
    getJavaScriptSidebar()
  ]
}

export default getFrontendSidebar
