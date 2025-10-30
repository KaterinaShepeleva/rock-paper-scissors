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
        aria-label={text}
        onClick={handleClick}
    >
        <img
            src={img}
            alt={text}
            aria-hidden={true}
        />
    </button>
);

export default GameButton;
