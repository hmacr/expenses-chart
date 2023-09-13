<script lang="ts">
  import { loadSpendData } from '../lib/data_loader';
  import Bar from './Bar.svelte';

  const spendData = loadSpendData();

  const currDay = new Date()
    .toLocaleDateString('en-us', { weekday: 'long' })
    .substring(0, 3)
    .toLowerCase();
</script>

<div class="flex justify-between h-[350px] py-8 m-4 border-b-2 border-b-cream">
  {#each spendData as data}
    <Bar
      day={data.day}
      amount={data.amount}
      heightPercent={data.percentOfMax}
      isCurrDay={data.day === currDay}
    />
  {/each}
</div>
