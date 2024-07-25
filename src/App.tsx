import { requests } from "./reqest";
import { Row } from "./components/Row";

function App() {

  return (
    // 追加箇所
    <div className="App">
      <Row title="" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    </div>
  )
}

export default App
