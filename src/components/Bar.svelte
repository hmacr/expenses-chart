<script lang="ts">
  export let day: string;
  export let amount: number;
  export let heightPercent: number;
  export let isCurrDay: boolean = false;

  let bgColor = isCurrDay ? 'bg-cyan' : 'bg-soft-red';
  let hoverbgColor = isCurrDay ? 'hover:bg-cyan/50' : 'hover:bg-soft-red/50';

  let tooltip: HTMLElement;

  function handleEnter(e: Event) {
    tooltip.classList.remove('hidden');
  }

  function handleLeave(e: Event) {
    tooltip.classList.add('hidden');
  }
</script>

<div class="flex flex-col justify-end items-center gap-2 h-full">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="relative w-[45px] {bgColor} rounded-sm hover:cursor-pointer {hoverbgColor} transition-colors"
    style="height: {heightPercent}%"
    on:mouseenter={handleEnter}
    on:mouseleave={handleLeave}
  >
    <span
      class="absolute -top-[50px] -left-[10px] bg-dark-brown text-cream font-bold p-2 rounded-md shadow-md hidden"
      bind:this={tooltip}
    >
      ${amount}
    </span>
  </div>
  <p class="text-sm text-medium-brown">{day}</p>
</div>
