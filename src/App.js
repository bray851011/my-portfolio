import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;
