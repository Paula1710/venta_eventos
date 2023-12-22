import './App.css';
import { EventoRouter } from "./router/EventoRouter";
import { useEvents } from "./hooks/useEvents";
import { useEntradas } from "./hooks/useEntradas";
import { EventContext } from './context/EventContext';
import { EntradasContext } from './context/EntradasContext';

function App() {
  const events = useEvents();
  const { entradasCompradas, setEntradasCompradas } = useEntradas();

  return (
    <>
      <EventContext.Provider value={{ events }}>
        <EntradasContext.Provider value={{ entradasCompradas, setEntradasCompradas }}>
          <EventoRouter></EventoRouter>
        </EntradasContext.Provider>
      </EventContext.Provider>
    </>
  );
}

export default App;
