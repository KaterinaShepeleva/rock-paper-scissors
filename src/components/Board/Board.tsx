import { useState } from 'react';

import './Board.css';
import rockImg from 'assets/rock.svg';
import paperImg from 'assets/paper.svg';
import scissorsImg from 'assets/scissors.svg';

import {
    GameValue,
    GameValues,
    Outcomes,
    OutcomeValues,
} from 'src/constants';
import {
    getComputerTurn,
    determineOutcome,
} from 'src/utils';
import GameButton from 'components/GameButton/GameButton';

const Board = () => {
    const [playerChoice, setPlayerChoice] = useState<GameValue | null>(null);
    const [computerChoice, setComputerChoice] = useState<GameValue | null>(null);
    const [outcome, setOutcome] = useState<Outcomes>(Outcomes.Initial);

    const makePlayerChoice = (playerChoice: GameValue): void => {
        const computerChoice: GameValue = getComputerTurn();
        const outcome: Outcomes = determineOutcome(playerChoice.value, computerChoice.value);

        setPlayerChoice(playerChoice);
        setComputerChoice(computerChoice);
        setOutcome(outcome);

        // TODO: save to localStorage
    };

    return (
        <div className="board">
            <GameButton
                text={GameValues[0].name}
                img={rockImg}
                handleClick={() => makePlayerChoice(GameValues[0])}
            />
            <GameButton
                text={GameValues[1].name}
                img={paperImg}
                handleClick={() => makePlayerChoice(GameValues[1])}
            />
            <GameButton
                text={GameValues[2].name}
                img={scissorsImg}
                handleClick={() => makePlayerChoice(GameValues[2])}
            />

            <ul className="game-outcome">
                <li>You chose: <strong>{getUiString(playerChoice)}</strong></li>
                <li>Computer chose: <strong>{getUiString(computerChoice)}</strong></li>
                <li>Outcome: <strong>{OutcomeValues[outcome].name}</strong></li>
            </ul>
        </div>
    );
};

const getUiString = (value: GameValue | null): string => {
    return value != null ? value.name : '–';
};

export default Board;
