import './Statistics.css';
import { Score } from 'src/constants';

interface StatisticsProps extends Score {
    resetScore(): void;
}

const Statistics = (props: StatisticsProps) => {
    let ties = props.overall - props.player - props.computer;

    if (ties < 0) {
        ties = 0;
    }

    return (
        <div className="stats">
            <h3>Overall game score</h3>

            <ul>
                <li>You won: <strong className="stats-player">{props.player}</strong>&nbsp;times</li>
                <li>Computer won: <strong className="stats-comp">{props.computer}</strong>&nbsp;times</li>
                <li>Tie: <strong className="stats-tie">{ties}</strong>&nbsp;times</li>
                <li>Overall: <strong className="stats-all">{props.overall}</strong>&nbsp;games</li>
            </ul>

            <button
                type="button"
                className="btn-reset"
                onClick={props.resetScore}
            >
                Reset stats
            </button>
        </div>
    )
};

export default Statistics;
