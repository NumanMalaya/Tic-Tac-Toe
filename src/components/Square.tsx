interface Props {
  value: String;
  onSquareClick: () => void;
}
function Square({ value, onSquareClick }: Props) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
