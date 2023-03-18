import axios from 'axios';

axios.defaults.baseURL = `https://api.wisey.app/api/v1`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const response = await axios.get('auth/anonymous?platform=subscriptions');
    setAuthHeader(response.data.token);
  } catch (error) {
    console.log(error);
  }
};

export const getInfo = async () => {
  try {
    await getToken();
    const response = await axios.get('/core/preview-courses', {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.data.courses;
  } catch (e) {
    console.log(e);
  }
};

export const getCourseById = async id => {
  try {
    await getToken();
    const response = await axios.get(`/core/preview-courses/${id}`, {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
