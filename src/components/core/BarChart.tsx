import React from 'react';
import { Bar } from 'react-chartjs-2';

interface IBarChartProps{
    labels:string[]
    data:number[]
    chartLabel:string
}
export class BarChart extends React.PureComponent<IBarChartProps>{
    public render() {
        const { labels, data,chartLabel } = this.props
        const chartData = {
            labels: [...labels],
            datasets: [
              {
                label: chartLabel,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [...data]
              }
            ]
          };
          
        return (
          <div>
            <Bar
              data={chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                labels:false
              }}
            />
          </div>
        );
      }
}