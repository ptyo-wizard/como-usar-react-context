import React,{useState,createContext} from 'react';

export const DataContext = createContext();

const defaultData={
    'name':'fabian',
    'edge':36
  }

export function DataProvider({children}) {
    const [data, setData] = useState(defaultData)
    return (
        <DataContext.Provider value ={
            {
                data,
                setData
            }
        }>
            {children}
        </DataContext.Provider>
    )

}

