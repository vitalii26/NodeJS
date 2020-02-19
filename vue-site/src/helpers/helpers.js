import axios from 'axios';
import Vue from "vue";

const vm = new Vue();
const baseURL = 'http://localhost:3000/api/sites';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
    getSites: handleError(async () => {
      const res = await axios.get(baseURL);
      return res.data;
    }),
    deleteSite: handleError(async id => {
      const res = await axios.delete(`${baseURL}/${id}`);
      return res.data;
    }),
    createSite: handleError(async site => {
      const res = await axios.post(`${baseURL}?url=${site.url}&server.ip=${site.server.ip}&server.name=${site.server.name}`);
      return res.data;
    })
  };