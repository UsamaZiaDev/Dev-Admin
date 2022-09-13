import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Sidebar from './Layout/Sidebar'
import Charts from './Pages/Charts'
import Components from './Pages/Components'
import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Tables from './Pages/Tables'
import Utilities from './Pages/Utilities'


function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="Charts" element={<Charts/>} />
            <Route path="Components" element={<Components/>} />
            <Route path="Home" element={<Home/>} />
            <Route path="Pages" element={<Pages/>} />
            <Route path="Tables" element={<Tables/>} />
            <Route path="Utilities" element={<Utilities/>} />
            {/* Not Found */}
            <Route path="*" element={<>Not Found</>}/>
          </Routes>
        </Sidebar>
      </Router>
    </>

  );
} 

export default App;