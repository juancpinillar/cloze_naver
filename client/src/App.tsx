import { useCallback, useEffect, useState } from "react"
import { getHtmlContent } from "./api/htmlUpdates"
import Button from "./widgets/Button"
import H from "./widgets/H"

const App: React.FC = () => {
  const [content, setContent] = useState<string | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const onVisibilityChange = useCallback(() => {
    if (!document.hidden && isFetching) {
      getHtmlContent().then(setContent)
      setIsFetching(false)
    }
  }, [isFetching])

  useEffect(() => {
    const visibilityChangeEvent = 'visibilitychange'
    document.addEventListener(visibilityChangeEvent, onVisibilityChange)
    return () => {
      document.removeEventListener(visibilityChangeEvent, onVisibilityChange)
    }
  }, [onVisibilityChange])
  
  const fetchHtml = useCallback(() => {
    setIsFetching(true)
    window.open('https://en.dict.naver.com/#/search?range=example&shouldSearchVlive=false&query=%ED%95%98%EB%8A%98&haveTrans=exist:1')
  }, [])

  if (content) {
    console.log(content)
  } else {
    console.log('no content')
  }

  return (
    <div className="flex flex-col p-24 items-center space-y-12">
      <Button onClick={fetchHtml}>Fetch</Button>
      {isFetching && <H>Fetching</H>}
    </div>
  )
}

export default App