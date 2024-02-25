<script>
    export let time = 0;
    export let color = "#232338";
    export let moves = 0;
</script>

<section style="background: {color};">
    <h1>
        Time {time}
        <br>
        Moves {moves}
    </h1>
    <i class="fa-solid fa-rotate-right"></i>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;
        background: #f6f6f6;
    }
</style>
