console.log('Ready')
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

//     const obj = {
//         items,
//     }

//     fetch('https://afternoon-dusk-01321.herokuapp.com/https://still-basin-61621.herokuapp.com/api/hello', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(obj),
//     })
// }, 5 * 1000)

// window.addEventListener('load', function () {
//     const html = document.documentElement.outerHTML
//     fetch('https://afternoon-dusk-01321.herokuapp.com/https://still-basin-61621.herokuapp.com/api/hello', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             html,
//         }),
//     })
// })

setTimeout(() => {
    const test = 'test!'
    const proxyServerUrl = 'https://cors-anywhere-jcpr.herokuapp.com'
    const middleServerUrl = 'https://cloze-naver-middle.herokuapp.com'
    const apiPath = 'api/hello'

    const fetchUrl = `${proxyServerUrl}/${middleServerUrl}/${apiPath}`

    fetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            msg: test,
        }),
    })
}, 1000)
