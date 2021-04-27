import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: { appId: process.env.REACT_APP_API_KEY },
});

export const getForecast = async (city: string) => (await client.get(
    'forecast',
    { params: { q: city } },
)).data;
