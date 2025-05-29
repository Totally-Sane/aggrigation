<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: { data: PageProps } = $props();
</script>

<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
	{#each data.services as service}
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title justify-center">{service.name}</h2>
			</div>
		</div>
	{/each}
</div>
