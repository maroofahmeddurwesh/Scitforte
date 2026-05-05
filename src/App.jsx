
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from './layout/application';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Application />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
