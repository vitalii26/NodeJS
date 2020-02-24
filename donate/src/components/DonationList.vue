<template>
    <div class="container">
        <div class="overflow-auto">
            <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            ></b-pagination>
            <p class="mt-3">
                Current Page: {{ currentPage }}
            </p>
            <b-table
            id="my-table"
            :items="donationList"
            :per-page="perPage"
            :current-page="currentPage"
            small
            ></b-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            perPage: 10,
            currentPage: 1
        }
    },
    props: ['donationList'],
    computed: {
        rows() {
            return this.donationList.length;
    }
    }
}
</script>