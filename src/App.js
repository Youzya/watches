import './App.css';
import FormWatch from './components/FormWatch';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const initialState = [
    {
        id: 1,
        name: 'Moscow',
        offsetUTC: 3,
    },
    {
        id: 2,
        name: 'Kaliningrad',
        offsetUTC: 2,
    }
  ]
  return (
    <FormWatch initialState={initialState}/>
  );
}

export default App;
