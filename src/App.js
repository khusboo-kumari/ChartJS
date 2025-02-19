import './App.css';
import { PieChart } from './components/Pie';
import { LineGraph } from './components/Line'; 
import  {BarChart} from  './components/Bar' ;

function App() {
  return (
    <div className="App">
      <LineGraph/>
      <BarChart/>
      <PieChart/>
    </div>
  );
}

export default App;
