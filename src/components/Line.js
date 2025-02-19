import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js/auto';
import { lineChartData } from '../FAKE_DATA';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

export const LineGraph = () => {
    const options = {
        responsive: true,
        plugins :{
            legend:{
                position: "top"
            },
            title:{
                display: true,
                text:"This is a graph representing my daily steps " , 
            }
        }
    } ; 
    // const data = {} ; 
    
    // return <Line options={options} data={lineChartData} />
    return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
                <div style={{
                    width: "1000px", height: "500px"
                }}>  {/* Increase size here */}
                    <Line options={options} data={lineChartData} />
                </div>
            </div>
        );
}; 