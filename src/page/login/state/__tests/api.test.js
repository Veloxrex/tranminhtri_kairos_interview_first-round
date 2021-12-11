import MockAdapter from 'axios-mock-adapter';
import axios from "axios";
import { getUserAuthenticationAPI } from '../api';
describe('Should test api login page', () => {
  const AxiosInstance =  axios.create({
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }});
  const mock = new MockAdapter(AxiosInstance);

  describe('Should test api login', () => {
    it('Should return data when call the api get user authentication success', async () => {
      const apiUrl = 'https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1';
      const dataMock = {
        "createdAt": "2021-10-21T08:36:53.248Z",
        "name": "Jimmie Thompson",
        "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
        "username": "Mona_Kassulke14",
        "password": "EECsjlVnWIXfeuA",
        "id": "1"
      }
      mock.onGet(apiUrl).reply(() => [200, dataMock])

      const result = await getUserAuthenticationAPI();
      expect(result.data).toEqual(dataMock);
    }) 
  })
})