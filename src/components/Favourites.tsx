import React from 'react';
import { Stack, Text, Toggle } from 'office-ui-fabric-react';
import { Favourite } from './Favourite';
import { useToggle } from 'react-use';

const testLocs = [{ location: 'London' }, { location: 'Berlin' }, { location: 'New York' }];

export const Favourites = () => {
    const [displayFavourites, toggleDisplay] = useToggle(true);
    return (
        <Stack grow={true} tokens={{ childrenGap: 15 }} styles={{ root: { height: '100%' }}} verticalAlign="start">
            <Text>Favourites</Text>
            <Toggle checked={displayFavourites} onChange={toggleDisplay} label="Display favourites" />
            {displayFavourites && testLocs.map((a) => <Favourite key={a.location} {...a} />)}
        </Stack>
    );
}
