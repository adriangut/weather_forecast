import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { Caller } from './components/Caller';
import { Favourites } from './components/Favourites';

const App = () => (
    <Stack horizontal={true} tokens={{ padding: 20, childrenGap: 20 }} horizontalAlign="center" verticalAlign="start">
        <Stack.Item align="center">
            <Favourites />
        </Stack.Item>
        <Caller />
    </Stack>
);

export default App;
