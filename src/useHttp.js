import {useEffect,useState} from 'react'
import axios from 'axios';

function useHttp(url) {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData=async()=>{
            console.log(url)
            //const req = await fetch(url);
            //const res = await req.json();
            const res = await axios.get(url);
            //const res = await req.json();
            setData(res.data);
        }
        getData();
    },[url]);

    return [data];
    
}

export default useHttp;