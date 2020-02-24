<template>
  <div class="home">
    <div class="container">
      <h1 class="text-center">
        Home
      </h1>
      <donation-card
        :maxDonate="maxDonate"
        :donationSum="donationSum"
        :monthDonation="monthDonation"
        :loading="loading">
      </donation-card>
      <line-chart
        class="mb-4"
        v-if="!loading"
        :chartData="donationChart"/>
      <donation-list 
        :donationList="donationList">
      </donation-list>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import DonationList from '@/components/DonationList';
import DonationCard from '@/components/DonationCard';
import { api } from '../helpers/helpers';
import LineChart from '@/components/LineChart';
export default {
  name: 'Home',
  data() {
    return {
      donationList: [],
      maxDonate: [],
      donationSum: [],
      monthDonation: [],
      donationChart: [],
      loading: true
    }
  },
  components: {
    DonationList,
    DonationCard,
    LineChart
  },
  async mounted() {
    this.donationList = await api.getAllDonates();
    this.maxDonate = await api.getMaxDonate();
    this.donationSum = await api.getDonatesSum();
    this.monthDonation = await api.getMonthDonates();
    this.donationChart = await api.getChartDonation();
    this.loading = await false;
  }
}
</script>
