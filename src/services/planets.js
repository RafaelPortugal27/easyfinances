import httpClient from 'tiny-json-http';

export const API_URL = 'https://swapi.dev/api';

export const getPlanet = async (planetId) => {
  try {
    const { body } = await httpClient.get({ url: `${API_URL}/planets/${planetId}` });
    console.log('body', body);
    return body;
  } catch (e) {
    console.log('error: ', e);
    return null;
  }
};
