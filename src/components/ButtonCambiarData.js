import React, {useContext} from 'react'
import { DataContext } from "../context/DataContext";

const data={
    'name':'rocio',
    'edge':29
  }
function ButtonCambiarData() {
    const {setData} = useContext(DataContext)

    const handleClick =()=>{
        console.log("cambiando data")    
        return setData(data);
    }
    return (
        <div>
            <button 
            className='btn btn-primary'
            onClick={handleClick}
            >cambiar data</button>
        </div>
    )
}

export default  ButtonCambiarData;
