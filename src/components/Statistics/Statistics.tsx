import './Statistics.css';
import { Score } from 'src/constants';

interface StatisticsProps extends Score {
    resetScore(): void;
}

const Statistics = (props: StatisticsProps) => {
    const {
        player,
        computer,
        overall,
        resetScore,
    } = props;
    let ties = props.overall - props.player - props.computer;

    if (ties < 0) {
        ties = 0;
    }

    return (
        <div className="stats">
            <h2>Overall game score</h2>

            <ul>
                <li>
                    You won: <strong className="text--win">{player}</strong>
                    &nbsp;{getPlural(player)}
                </li>
                <li>
                    Computer won: <strong className="text--lose">{computer}</strong>
                    &nbsp;{getPlural(computer)}
                </li>
                <li>
                    Tie: <strong className="text--neutral">{ties}</strong>
                    &nbsp;{getPlural(ties)}
                </li>
                <li>
                    Game played: <strong>{overall}</strong>
                    &nbsp;{getPlural(overall)}
                </li>
            </ul>

            <button
                type="button"
                className="btn-reset"
                onClick={resetScore}
            >
                Reset stats
            </button>
        </div>
    )
};

const getPlural = (num: number) => num === 1 ? 'time' : 'times';

export default Statistics;
