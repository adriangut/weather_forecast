import { Label, Stack } from 'office-ui-fabric-react';
import React from 'react';
import { useAsync } from 'react-use';
import { getForecast } from '../clients/weather';
import { LANGUAGE_KEYS } from '../utils/langs';
import { Charts } from './Charts';

type FavouriteProps = { location: string, language?: LANGUAGE_KEYS };

export const Favourite = ({ location, language }: FavouriteProps) => {
    const forecast = useAsync(async () => await getForecast(location, language), [location, language ?? 'en']);
    return (
        <Stack>
            <Label>{location}</Label>
            <Charts height={100} width={200} data={forecast.value?.list} axisHeight={50} />
        </Stack>
    );
};
