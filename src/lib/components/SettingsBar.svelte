<script>
    let clicked = false;
</script>

<nav>
    <div>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-rotate-right"></i>
        <i class="fa-solid fa-clock"></i>
        {#if !clicked}
            <i
                class="fa-solid fa-volume-high"
                on:click={() => (clicked = !clicked)}
            ></i>
        {:else}
            <i
                class="fa-solid fa-volume-off"
                on:click={() => (clicked = !clicked)}
            ></i>
        {/if}
    </div>
</nav>

<style>
    nav {
        display: inline-block;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: wheat;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    i {
        max-width: 3rem;
        font-size: 1.5rem;
        margin: 0 1.5rem;
    }
    i:hover {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        color: #323223;
    }
</style>
