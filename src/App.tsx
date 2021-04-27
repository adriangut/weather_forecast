import React from 'react';
import { Stack } from 'office-ui-fabric-react';
import { Caller } from './components/Caller';

const App = () => (
    <Stack horizontal={true} tokens={{ padding: 20, childrenGap: 20 }} horizontalAlign="center">
        <Caller />
    </Stack>
);

export default App;
