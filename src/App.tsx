import { Provider } from './contexto';
import { PageLoteria } from './pages/pageLoteria';
import "@fontsource/roboto"
import "./index.css"


function App() {

  return (
    <Provider>
      <PageLoteria />
    </Provider>
  );
}

export default App;
