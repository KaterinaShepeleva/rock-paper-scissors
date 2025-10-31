import './App.css';
import Board from 'components/Board/Board';
import Rules from 'components/Rules/Rules';

const App = () => {
    return (
        <div className="container">
            <h1>Rock, paper, scissors</h1>

            <div className="wrapper">
                <main className="board-container">
                    <Board/>
                </main>

                <aside className="aside">
                    <Rules/>
                </aside>
            </div>
        </div>
    );
};

export default App;
