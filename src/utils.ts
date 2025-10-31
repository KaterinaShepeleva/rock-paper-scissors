import {
    STORAGE_KEY,
    Values,
    GameValue,
    GameValues,
    Outcomes,
    Score,
    initialGameState,
} from './constants';

export const getComputerTurn = (): GameValue => {
    const turn: number = Math.floor(Math.random() * GameValues.length);

    return GameValues[turn];
}

export const determineOutcome = (player: Values, computer: Values): Outcomes => {
    if (player === computer) {
        return Outcomes.Tie;
    }

    switch (player) {
        case Values.Rock:
            return computer === Values.Paper ? Outcomes.ComputerWon : Outcomes.PlayerWon;
        case Values.Paper:
            return computer === Values.Rock ? Outcomes.PlayerWon : Outcomes.ComputerWon;
        case Values.Scissors:
            return computer === Values.Rock ? Outcomes.ComputerWon : Outcomes.PlayerWon;
        default:
            return Outcomes.Tie;
    }
}

export const getStorageScore = (): Score => {
    const lsValue = localStorage.getItem(STORAGE_KEY);
    return lsValue ? JSON.parse(lsValue) : { ...initialGameState };
}

export const setStorageScore = (score: Score): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(score));
}
