import './App.css';

import Login from './components/Login.jsx';
import Showdata from './components/Showdata.jsx';
import Update from './components/Update.jsx';
import DeleteRecord from './components/DeleteRecord.jsx';


function App() {
  return (
    <div className="App">
     <Login/>
     <Showdata/>
     <Update/>
     <DeleteRecord/>
    </div>
  );
}

export default App;