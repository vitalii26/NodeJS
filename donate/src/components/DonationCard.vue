<template>
    <b-card-group
        class="mb-3"
        deck>
      <b-card bg-variant="primary"
        text-variant="white"
        header="Best donor"
        class="text-center">
        <b-card-text v-if="!loading">
          {{maxDonate[0].name}} with {{maxDonate[0].donation}} USD
        </b-card-text>
      </b-card>
      <b-card
        bg-variant="primary"
        text-variant="white"
        header="All donations"
        class="text-center">
        <b-card-text v-if="!loading">
            {{donationSum[0].sum}} USD
        </b-card-text>
      </b-card>
      <b-card
        bg-variant="primary"
        text-variant="white"
        header="Donation for month"
        class="text-center">
        <b-card-text v-if="!loading">
            {{monthDonation[0].sum}} USD
        </b-card-text>
      </b-card>
    </b-card-group>
</template>

<script>
export default {
    props: ['maxDonate', 'donationSum', 'monthDonation', 'loading']
}
</script>
