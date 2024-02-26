// place files you want to import through the `$lib` alias in this folder.

export let turn: boolean = true;
export let pointerEvents: boolean = true;

export function setTurn(): void {
    turn = !turn;
}

export function setPointerEvents(): void {
    pointerEvents = !pointerEvents;
}
