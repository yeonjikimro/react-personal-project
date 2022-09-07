import HandIcon from "./HandIcon";
import './HandButton.css';




function HandButton({ value, onClick }) {
    const handleClick = () => onClick(value);
    return (
        <button class="HandButton" onClick={handleClick}> 
            <HandIcon className="HandButton-icon" value={value}/>
        </button>
        );
}

export default HandButton;