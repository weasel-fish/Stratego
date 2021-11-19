import Setup from './Setup';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/setup' element={<Setup />}/>
      </Routes>
    </div>
  );
}

export default App;
