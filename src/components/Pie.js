import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, plugins } from "chart.js";
import { pieChartData } from "../FAKE_DATA";
ChartJS.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
    const options = {
        responsive: true,  // Ensure the chart adjusts dynamically
        maintainAspectRatio: false, // Allow custom sizing
        plugins: {
            legend: {
                position: "bottom", // Adjust legend position if needed
            },
        },
    };

    // return <Pie options={options} data={pieChartData}/>
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <div style={{
                width: "600px", height: "600px"
            }}>  {/* Increase size here */}
                <Pie options={options} data={pieChartData} />
            </div>
        </div>
    );
}