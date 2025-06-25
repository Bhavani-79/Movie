import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import TopRated from './component/TopRated';
import UpComing from './component/UpComing';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/top-rated"  Component={TopRated}/>
      <Route exact path="/upcoming"  Component={UpComing}/>
    </Routes>
  </BrowserRouter>
)



export default App;
