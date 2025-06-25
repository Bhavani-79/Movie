import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home} />
    </Routes>
  </BrowserRouter>
)



export default App;
