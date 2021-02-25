//import {useState} from 'react';
//import useHttp from "./useHttp";
import './App.css';

import { DataProvider } from './context/DataContext';
import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import ButtonCambiarData from './components/ButtonCambiarData';




function App() {
  // const [id, setId] = useState(1);
  // const [post] = useHttp(`https://jsonplaceholder.typicode.com/todos/${id}`)
  // const hPrev=()=>{
  //   if(id >1)
  //     setId(id-1);
  // }
  // const hNext=()=>{
  //   setId(id+1);
  // }
  return (
    <DataProvider>
    <div className="App">
      {/* <div>hola carola</div>
      <h1>{post.title}</h1>
      
      <button onClick={hPrev}>prev</button>
      <button onClick={hNext}>next</button> */}

      <Pagina1 ></Pagina1>
      <Pagina2 ></Pagina2>
      <ButtonCambiarData></ButtonCambiarData>

    </div>
    </DataProvider>
  );
}

export default App;
