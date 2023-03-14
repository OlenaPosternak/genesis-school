import axios from 'axios';

axios.defaults.baseURL = `https://api.wisey.app/api/v1`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  const response = await axios.get('auth/anonymous?platform=subscriptions');
  console.log(response);
  setAuthHeader(response.data.token);
};

export const getInfo = async () => {
  try {
    await getToken();
    const response = await axios.get('/core/preview-courses');
    console.log(response.data.courses);
    return response.data.courses;
  } catch (e) {
    console.log(e);
  }
};
getInfo();
