import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from "chart.js";
import "./Chart.css";

ChartJS.register(...registerables);

const Chart = () => {
    const state = JSON.parse(localStorage.getItem("bills"));
    let arr = state.slice();
    arr.sort(function (a, b) {
        if (a.date > b.date) {
            return 1;
        }
        return -1;
    });
    const data = {
        labels: arr.map((bill) => bill.date),
        datasets: [{
            label: "Monthly Billing Cycle",
            data: arr.map((bill) => bill.amount),
            backgroundColor: 'rgba(238,175,0,0.4)',
            borderColor: 'rgba(238,175,0,0.5)',
            pointBorderColor: 'rgba(238,175,0,0.7)',
        }
        ]
    }
    return (
        <div >
            Time Series Chart:
            <Line
                data={data}
            />
        </div>
    )
}


export default Chart