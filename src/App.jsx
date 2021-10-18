import { Home } from './pages/Home';
import './styles/global.scss'
import {HistoryContextProvider} from './context/HistoryContext'
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <HistoryContextProvider>
      <Navbar/>
      <Home/>
    </HistoryContextProvider>
  );
}
