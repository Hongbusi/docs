import getFrontendSidebar from './frontend'
import getNotesSidebar from './notes'
import getInterviewSidebar from './interview'

function getSidebar() {
  return {
    '/frontend/': getFrontendSidebar(),
    '/notes/': getNotesSidebar(),
    '/interview/': getInterviewSidebar()
  }
}

export default getSidebar
