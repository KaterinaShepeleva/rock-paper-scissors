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
import GameButton from 'components/GameButton/GameButton';

const Board = () => {
    const [playerChoice, setPlayerChoice] = useState<GameValue | null>(null);
    const [computerChoice, setComputerChoice] = useState<GameValue | null>(null);
    const [outcome, setOutcome] = useState<Outcomes>(Outcomes.Initial);

    return (
        <div className="board">
            <GameButton
                text={GameValues[0].name}
                img={rockImg}
                handleClick={() => console.log(GameValues[0].name)}
                // handleClick={() => chooseValue(GameValues[0])}
            />
            <GameButton
                text={GameValues[1].name}
                img={paperImg}
                handleClick={() => console.log(GameValues[1].name)}
                // handleClick={() => chooseValue(GameValues[1])}
            />
            <GameButton
                text={GameValues[2].name}
                img={scissorsImg}
                handleClick={() => console.log(GameValues[2].name)}
                // handleClick={() => chooseValue(GameValues[2])}
            />

            <ul className="game-outcome">
                <li>You chose: <strong>{getUiString(playerChoice)}</strong></li>
                <li>Computer chose: <strong>{getUiString(computerChoice)}</strong></li>
                <li>Outcome: <strong>{OutcomeValues[outcome].name}</strong></li>
            </ul>
        </div>
    )
}

const getUiString = (value: GameValue | null): string => {
    return value != null ? value.name : '–';
}

export default Board;
