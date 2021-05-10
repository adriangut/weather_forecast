import React from "react";
import { CartesianGrid, Legend, Line, LineChart, LineProps, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartsProps } from "./Charts";

type ChartProps = ChartsProps & {
    axisDataKey: string;
    axisHeight?: number;
    gridColor?: string;
    lineColor: string;
    lineDataKey: string;
    lineName: string;
    lineType?: LineProps['type'];
}

export const Chart = (props: ChartProps) => (
    <LineChart width={props.width} height={props.height} data={props.data}>
        <Line type={props.lineType} dataKey={props.lineDataKey} name={props.lineName} stroke={props.lineColor} />
        <CartesianGrid stroke={props.gridColor} />
        <Tooltip />
        <Legend />
        <XAxis dataKey={props.axisDataKey} height={props.axisHeight} />
        <YAxis />
    </LineChart>
)

Chart.defaultProps = {
    axisHeight: 40,
    gridColor: '#F3F2F1',
    lineType: 'natural',
};
