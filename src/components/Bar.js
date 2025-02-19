import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend } from 'chart.js/auto';
// import { lineChartData } from '../FAKE_DATA';
import { barChartData } from '../FAKE_DATA';
ChartJS.register(CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend );

export const BarChart = () =>{
      const options={} ;
    // return <Bar  options={options} data={barChartData}/> ; 
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <div style={{
                width: "1200px", height: "500px"
            }}>  {/* Increase size here */}
                <Bar options={options} data={barChartData} />
            </div>
        </div>
    );
}