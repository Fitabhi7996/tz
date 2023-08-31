const Option = ({ option, selected, correct, onClick }) => {
  return <div data-testid="option">
    
    <button
      className={selected ? (correct ? 'bgGreen' : 'bgRed') : ''}
      onClick={onClick}
      disabled={selected}
    >
      {option}
    </button>

  </div>;
};

export default Option;
