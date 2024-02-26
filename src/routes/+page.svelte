<script lang="ts">
    import SettingsBar from "$lib/components/SettingsBar.svelte";
    import Timer from "$lib/components/Timer.svelte";

    let StartingMinutes: number = 10;
    let StartingSeconds: number = 0;
</script>

<div>
    <nav>
        <SettingsBar />
    </nav>
    <section>
        <Timer
            {StartingMinutes}
            {StartingSeconds}
            isClickable={true}
            color="#F00"
            player={true}
        />
        <Timer
            {StartingMinutes}
            {StartingSeconds}
            isClickable={false}
            color="#0f0"
            player={false}
        />
    </section>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }

    nav {
        height: 10vh;
        width: 100vw;
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100vw;
        background: #f6f6f6;
    }
</style>
