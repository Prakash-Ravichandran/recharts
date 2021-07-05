import logo from './logo.svg';
import './App.css';
import renderLineChart from './components/charts.components';
import Example from './components/charts.components';
import Example2 from './components/chartsProject.component';
import TwoSimplePieChart from './components/TwoSimplePieChart';
import CustomActiveShapePieChart from './components/CustomActiveShapePieChart';

function App() {
  return (
       <div>
         <h1>Link checker charts</h1>
    {/* <Example/>
    <Example2/> */}
    <TwoSimplePieChart/>
    {/* <CustomActiveShapePieChart/> */}
    {/* <myPieChart/> */}
       </div>
       
  );
}

export default App;
