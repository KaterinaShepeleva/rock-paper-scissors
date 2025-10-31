import {
    useState,
    useEffect,
} from 'react';

import './App.css';
import {
    Outcomes,
    Score,
    initialGameState,
} from 'src/constants';
import {
    getStorageScore,
    setStorageScore,
} from 'src/utils';
import Board from 'components/Board/Board';
import Rules from 'components/Rules/Rules';
import Statistics from 'components/Statistics/Statistics';

const App = () => {
    const [score, setScore] = useState<Score>(initialGameState);

    // Get initial statistics when app is loaded
    useEffect(() => {
        setScore(getStorageScore());
    }, []);

    const recordScore = (outcome: Outcomes): void => {
        if (outcome === Outcomes.Initial) {
            return;
        }

        const newScore: Score = {
            player: (outcome === Outcomes.PlayerWon) ? score.player + 1 : score.player,
            computer: (outcome === Outcomes.ComputerWon) ? score.computer + 1 : score.computer,
            overall: score.overall + 1,
        };

        setScore(newScore);
        setStorageScore(newScore);
    };

    const clearScore = (): void => {
        const zeroScore = { ...initialGameState };

        setScore(zeroScore);
        setStorageScore(zeroScore);
    };

    return (
        <div className="container">
            <h1>Rock, paper, scissors</h1>

            <div className="wrapper">
                <main className="board-container">
                    <Board
                        recordOutcome={recordScore}
                    />

                    <Statistics
                        {...score}
                        resetScore={clearScore}
                    />
                </main>

                <aside className="aside">
                    <Rules/>
                </aside>
            </div>
        </div>
    );
};

export default App;
