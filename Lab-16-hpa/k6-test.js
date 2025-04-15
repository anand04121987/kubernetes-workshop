import http from 'k6/http';
import { check } from 'k6';
export const options = {
  vus: 100,
  duration: '30s',
};
const BASE_URL = 'http://demo.example.com';
export default function () {
  const url = `${BASE_URL}`;
  const resp = http.get(url);
  check(resp, {
    'endpoint was successful': (resp) => resp.status === 200,
  });
}