import {
    Values,
    GameValue,
    GameValues,
    Outcomes,
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
