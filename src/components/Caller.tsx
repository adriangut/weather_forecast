import React, { useCallback, useState } from 'react';
import { getForecast } from '../clients/weather';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Stack, TextField } from 'office-ui-fabric-react';
import { useAsync, useThrottle } from 'react-use';

export const Caller = () => {
    const [search, setSearch] = useState('');
    const setSearchValue = useCallback((_ev, value) => setSearch(value), []);
    const throttledSearch = useThrottle(search);
    const forecast = useAsync(async () => await getForecast(throttledSearch), [throttledSearch]);

    return (
        <Stack tokens={{ childrenGap: 20 }}>
            <TextField
                defaultValue={search}
                onChange={setSearchValue}
                placeholder="Start typing your area of interest..."
            />

            <LineChart width={600} height={300} data={(forecast?.value as any)?.list}>
                <Line type="natural" dataKey="main.temp" stroke="#8884d8" />
                <CartesianGrid stroke="#F3F2F1" />
                <Tooltip />
                <Legend />
                <XAxis dataKey="dt_txt" />
                <YAxis />
            </LineChart>
        </Stack>
    );
}
