import { useEffect, useState } from "react"
import { getHtmlContent } from "./api/htmlUpdates"

const App: React.FC = () => {
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    getHtmlContent().then(setContent)
  }, [])

  if (content) {
    console.log(content)
  } else {
    console.log('no content')
  }

  return (
    <div className="p-12 text-blue-400">Test</div>
  )
}

export default App