<script lang="ts">
    import {
        turn,
        setTurn,
        pointerEvents,
        setPointerEvents
    } from "$lib/index";

    export let color: string = "#232338";
    export let moves: number = 0;
    export let isClickable: boolean;

    export let StartingMinutes: number;
    export let StartingSeconds: number;

    let time: number = StartingMinutes * 60 + StartingSeconds;
    let displayTime: string = StartingMinutes + ":" + StartingSeconds;
    // setInterval(updateCountdown, 1000);

    let timerInterval: any;
    let isTimerRunning: boolean = false;

    export let player: boolean; // True means that player 1's turn, false means player 2's turn

    function stop_timer() {
        moves++;
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
        } else {
            timerInterval = setInterval(updateCountdown, 1000);
            isTimerRunning = true;
        }
    }

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds: number = time % 60;
        let seconds_to_display: string =
            seconds < 10 ? "0" + seconds : seconds.toString();
        displayTime = minutes + ":" + seconds_to_display;

        time--;
    }

    // function incrementMove() {
    //     moves++;
    // }
    function handleClick() {}

    function disableClick() {
        setTurn();
        setPointerEvents();
        console.log(player, turn, pointerEvents);
    }
</script>

<section
    id="timer"
    style="background: {color}; pointer-events: {pointerEvents === player ? 'none' : 'auto'};"
    on:click={() => disableClick()}
>
    <h1>
        {#if isTimerRunning}
            <i class="fa-solid fa-pause" />
        {:else}
            <i class="fa-solid fa-play" />
        {/if}
        {displayTime}
        <br />
        Moves {moves}
    </h1>
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
