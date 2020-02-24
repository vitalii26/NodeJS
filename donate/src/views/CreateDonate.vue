<template>
<div class="container">
  <div class="row d-flex justify-content-center">
    <div class="col-12 col-md-6">
      <h1 class="text-center">Donate</h1>
      <donation-form
        @add-donation="addDonation">
      </donation-form>
    </div>
  </div>
</div>
</template>
<script>
  import axios from 'axios';
  import DonationForm from '@/components/DonationForm';
  import { api } from '../helpers/helpers';
  export default {
    data() {
      return {
      }
    },
    components: {
      DonationForm
    },
    methods: {
      addDonation(donate) {
        api.createDonate(donate);
    }
  }
  }
</script>
