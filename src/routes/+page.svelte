<script lang="ts">
  import { LogIn, Search, Menu } from '@lucide/svelte';

</script>

<div class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<Menu />
			</div>
			<ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li><a>Homepage</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<Search />
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<LogIn />
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
	</div>
</div>
