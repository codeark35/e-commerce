import axios from 'axios';

export const getCountriesRequest = async () =>
    await axios.get('https://countriesnow.space/api/v0.1/countries/');
