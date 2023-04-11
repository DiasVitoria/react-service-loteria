import { Provider } from './contexto';
import "@fontsource/roboto"
import "./index.css"
import { PageLoteria } from './pages/pageLoteria';


function App() {

  return (
    <Provider>
      <PageLoteria />
    </Provider>
  );
}

export default App;
