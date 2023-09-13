<script>
  import Chart from './Chart.svelte';
</script>

<div class="w-[500px] bg-very-pale-orange py-4 px-6 rounded-xl">
  <h2 class="text-dark-brown text-2xl font-bold py-4">
    Spending - Last 7 days
  </h2>
  <Chart />
  <div class="flex justify-between items-end py-4">
    <div class="flex flex-col gap-2">
      <h4 class="text-medium-brown">Total this month</h4>
      <p class="text-dark-brown text-3xl font-bold">$478.33</p>
    </div>
    <div class="flex flex-col items-end">
      <p class="text-dark-brown font-bold">+2.4%</p>
      <p class="text-medium-brown">from last month</p>
    </div>
  </div>
</div>
