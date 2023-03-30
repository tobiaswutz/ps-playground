<script lang="ts">
  import { onMount } from "svelte";
	export let data: any;

  let hotels = data.props.hotels;

  onMount(() => {
    console.log(data);
  });
</script>


{#each hotels as hotel}
  <div class="bg-black m-4 p-2 rounded-xl" >
    <p>ID: {hotel.id}</p>
    <h1>NAME: {hotel.name}</h1>
    <p>ADDRESS: {hotel.address}</p>
    <p>STARS: {hotel.stars} / 5 stars</p>
  </div>
{/each}



