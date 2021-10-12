import { Home } from './pages/Home';
import './styles/global.scss'
import {HistoryContextProvider} from './context/HistoryContext'

export default function App() {
  return (
    <HistoryContextProvider>
      <Home/>
    </HistoryContextProvider>
  );
}
