import './styles/global.scss'
import './styles/app.scss'
import { Home } from './pages/Home';
import {HistoryContextProvider} from './context/HistoryContext'
import { Navbar } from './components/Navbar';
import { ClockLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

export default function App() {
  
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <HistoryContextProvider>
      { 
        isLoading ?
          <div className="loader">
            <ClockLoader
            size={30}
            color={"#2200FF"}
            loading={isLoading}
            />
          </div>
          :
          <>
            <Navbar/>
            <Home/>
          </>
      }
    </HistoryContextProvider>
  );
}
