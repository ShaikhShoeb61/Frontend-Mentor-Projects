import React, { useContext, useEffect } from 'react'
import IPAddress from './components/IPAddress'
import { FetchContext } from './Context/FetchContext';

const App = () => {
  const { fetchData } = useContext(FetchContext);
  useEffect(()=> {fetchData()},[])
  return (
    <>
      <IPAddress/>
    </>
  )
}

export default App
