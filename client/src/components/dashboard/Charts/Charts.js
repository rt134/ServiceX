import React from 'react'
import "../Charts/chart.css"
// import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis'
import { Line } from 'react-chartjs-2'


const Chart = () => {

    const data = {
        labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets : [
            {
                label : "Customer Base(M)",
                data : [0.5,1,2,4,3,5,6,8,10,15,15,20],
                borderColor: ['rgba(102,205,170, 0.7)'],
                backgroundColor : ['rgba(56, 225, 176, 0.1)'],
                pointBackgroundColor : 'rgba(255, 206, 86, 0.8)',
                pointBorderColor : 'rgba(255, 206, 86, 01)'
            }
        ]
    }
    
    return (
        <Line data={data} />
    );

}

export default Chart;