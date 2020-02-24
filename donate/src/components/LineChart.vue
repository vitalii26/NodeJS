<script>
import { Line } from 'vue-chartjs';
export default {
  extends: Line,
  props: ['chartData'],
  mounted () {
    this.renderChart({
      labels: this.chartData.map(e => new Date(e.date).toLocaleDateString()),
      datasets: [
        {
          label: 'Donation',
          backgroundColor: '#6666ff',
          data: this.chartData.map(e => e.totalDonation)
        }
      ]
    })
  }
}
</script>