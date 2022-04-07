import getCssSidebar from './css'
import javascript from './javascript'
import vue from './vue'
import typescript from './typescript'
import webpack from './webpack'

function getInterviewSidebar() {
  return [
    getCssSidebar(),
    javascript,
    vue,
    typescript,
    webpack
  ]
}

export default getInterviewSidebar
