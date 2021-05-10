import axios from 'axios';
import { GetForecastResponse } from '../types/weather.types';
import { LANGUAGE_KEYS } from '../utils/langs';

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: { appId: process.env.REACT_APP_OPEN_WEATHER_API_KEY, units: 'metric' },
});

export const getForecast = async (city: string, lang: LANGUAGE_KEYS = 'en') => (await client.get<GetForecastResponse>(
    'forecast',
    { params: { q: city, lang } },
)).data;
