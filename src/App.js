import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/home/home.component';
import Project from './routes/proejct/project.component';
import Contact from './routes/contact/contact.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />}/>
        <Route path='project' element={<Project />}/>
        <Route path='contact' element={<Contact />}/>
      </Route>
    </Routes>
  )
}

export default App;
