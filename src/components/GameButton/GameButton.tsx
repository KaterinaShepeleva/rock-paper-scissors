import './GameButton.css';

interface GameButtonProps {
    text: string,
    img: string,
    handleClick(): void;
}

const GameButton = ({text, img, handleClick}: GameButtonProps) => (
    <button
        type="button"
        className="btn-item"
        onClick={handleClick}
    >
        <img
            src={img}
            alt={text}
        />
    </button>
);

export default GameButton;
