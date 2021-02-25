import React ,{useContext} from 'react'
import {DataContext} from '../context/DataContext'

function Pagina1() {

    const {data} = useContext(DataContext);
    
    return (
        <div>
             <h1>pagina 1</h1>
             <pre>
                 {
                     JSON.stringify(data)
                 }
             </pre>
            <hr/>
        </div>
    )
}

export default Pagina1
