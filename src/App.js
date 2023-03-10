import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home-Page';
import OpenNotes from './pages/Open-Notes';
import SavedNotesPage from './pages/Saved-Notes-Page';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to="/notes" />} />
        <Route path='/:type' element={<HomePage />} />
        <Route path='/opennotes/:id' element={<OpenNotes />} />
        <Route path='/savednotes' element={<SavedNotesPage />} />
      </Routes>
    </>
  );
}

export default App;
