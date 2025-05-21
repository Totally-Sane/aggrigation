<script lang="ts">
    import { LogIn, Menu } from '@lucide/svelte';
</script>

<div class="navbar bg-base-100 shadow-sm sticky top-0 z-10">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <Menu />
            </div>
            <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a href="/">Homepage</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a href="/" class="btn-ghost text-xl">TotallySane</a>
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <LogIn />
                <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button>
    </div>
</div>