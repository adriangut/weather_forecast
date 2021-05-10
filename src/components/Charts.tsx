import React from "react";
import { Stack } from 'office-ui-fabric-react';
import { GetForecastResponse } from "../types/weather.types";
import { Chart } from "./Chart";

export type ChartsProps = {
    data: GetForecastResponse['list'] | undefined;
    height: number;
    width: number;
    axisHeight?: number;
}

// TODO: replace with a grid
export const Charts = (props: ChartsProps) => (
    <Stack>
        <Stack horizontal={true}>
            <Chart lineDataKey="main.temp" lineName="temperature" lineColor="#8884d8" axisDataKey="dt_txt" {...props} />
            <Chart lineDataKey="main.humidity" lineName="humidity" lineColor="#8884d8" axisDataKey="dt_txt" {...props} />
        </Stack>
        <Stack horizontal={true}>
            <Chart lineDataKey="main.pressure" lineName="pressure" lineColor="#8884d8" axisDataKey="dt_txt" {...props} />
            <Chart lineDataKey="wind.speed" lineName="wind speed" lineColor="#8884d8" axisDataKey="dt_txt" {...props} />
        </Stack>
    </Stack>
);
