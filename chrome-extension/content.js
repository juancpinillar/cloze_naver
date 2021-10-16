console.log ('Ready')
// const children = document.body.childNodes
// console.log(children.length)
// for (const child of children) {
//     console.log(child)
// }

// setTimeout(() => {
//     const items = []

//     const content = document.getElementById('content')
//     const section = content.children[2]
//     const component = section.children[2]
//     const rows = component.children

//     const sampleRow = rows[1]
//     const sampleRowChildren = sampleRow.children

//     const translation = sampleRowChildren[0]
//     const translationCont = translation.children[0]
//     items.push(translationCont.outerHTML)

//     const sentence = sampleRowChildren[1]
//     const sentenceText = sentence.children[0]
//     items.push(sentenceText.outerHTML)

//     const source = sampleRowChildren[2]
//     items.push(source.outerHTML)
// }, 5 * 1000)

// const html = document.documentElement.outerHTML

function postToMiddleServer(obj, apiPath) {
  const proxyServerUrl = 'https://cors-anywhere-jcpr.herokuapp.com'
  const middleServerUrl = 'http://186.84.21.166:5000'
  
  if (apiPath[0] === '/') {
      apiPath = apiPath.slice(1)
  }

  const fetchUrl = `${proxyServerUrl}/${middleServerUrl}/${apiPath}`

  fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })
  .then(res => console.log(res.status, res.statusText))
}

function closeTab() {
  chrome.runtime.sendMessage('closeTab')
}

function getContentElement() {
  const content = document.getElementById('searchPage_example')
  return content
}

function onDataReady() {
  const content = getContentElement()
  const contentHtml = content.outerHTML
  // postToMiddleServer({ contentHtml }, '/api/hello')
}

let checkDataInterval = setInterval(() => {
  const isDataReady = getContentElement() !== null
  if (isDataReady) {
    clearInterval(checkDataInterval)
    onDataReady()
  }
}, 300)

postToMiddleServer({ msg: '15 '}, '/api/hello')
