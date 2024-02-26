<script lang="ts">
    import { onMount } from "svelte";

    export let color: string = "#232338";
    export let moves: number = 0;
    export let StartingMinutes: number;
    export let StartingSeconds: number;

    let time: number = StartingMinutes * 60 + StartingSeconds;
    let displayTime: string = StartingMinutes + ":" + StartingSeconds;
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds: number = time % 60;
        let seconds_to_display: string =
            seconds < 10 ? "0" + seconds : seconds.toString();
        displayTime = minutes + ":" + seconds_to_display;

        time--;
    }

    let turn: boolean = true; // True means that player 1's turn, false means player 2's turn

    function incrementMove() {
            moves++;
            turn = false;
    }
</script>

<section style="background: {color};" on:click={() => incrementMove()}>
    <h1>
        {displayTime}
        <br />
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
