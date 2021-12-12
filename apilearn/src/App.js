import logo from './logo.svg'
import './App.css'

function App() {
  // fetch(
  //   'https://newsapi.org/v2/everything?q=india&from=2021-11-12&sortBy=publishedAt&apiKey=e3553a68781d448b87d4ebd624b4b888',
  // ).then((result) => {
  //   result.json().then((resp) => {
  //     console.log(resp.articles, resp.articles[0])
  //   })
  // })

  fetch(
    'https://newsapi.org/v2/everything?q=tesla&from=2021-11-12&sortBy=publishedAt&apiKey=e3553a68781d448b87d4ebd624b4b888',
  ).then((result) => {
    result.json().then((resp) => {
      console.log(resp)
    })
  })
  return (
    <div>
      <h1>getting api call</h1>
    </div>
  )
}

export default App
