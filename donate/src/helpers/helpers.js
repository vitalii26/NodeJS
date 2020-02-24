import axios from 'axios';
import Vue from "vue";

const vm = new Vue();
const baseURL = `${process.env.VUE_APP_PATH}/api/donates`;

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
    getAllDonates: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    getMaxDonate: handleError(async id => {
        const res = await axios.get(`${baseURL}/max`);
        return res.data;
    }),
    getDonatesSum:  handleError(async () => {
        const res = await axios.get(`${baseURL}/sum`);
        return res.data;
    }),
    getMonthDonates:  handleError(async () => {
        const res = await axios.get(`${baseURL}/month`);
        return res.data;
    }),
    getChartDonation: handleError(async donate => {
      const res = await axios.get(`${baseURL}/chart`);
      return res.data;
    }),
    createDonate: handleError(async donate => {
      const res = await axios.post(`${process.env.VUE_APP_PATH}/api/donates?name=${donate.name}&email=${donate.email}&donation=${donate.donation}&message=${donate.message}`);
      return res.data;
    })
  };