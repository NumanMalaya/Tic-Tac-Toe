import { useState } from "react";
import Square from "./Square";
import checkWinner from "./CheckWinner";
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  function setSquare(i: number) {
    const squaresCopy = squares.slice();
    if (!squaresCopy[i]) {
      if (player == "X") {
        squaresCopy[i] = "X";
        setPlayer("O");
      } else {
        squaresCopy[i] = "O";
        setPlayer("X");
      }
    }
    setSquares(squaresCopy);
  }
  return (
    <div>
      {checkWinner({ squares })}
      <div className="namePlate">
        <h2 id="playerX" className={player === "X" ? "text-success fw-bold fs-1" : ""}>
          X
        </h2>
        <h2 id="playerO" className={player === "O" ? "text-success fw-bold fs-1" : ""}>
          O
        </h2>
      </div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => setSquare(0)} />
          <Square value={squares[1]} onSquareClick={() => setSquare(1)} />
          <Square value={squares[2]} onSquareClick={() => setSquare(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => setSquare(3)} />
          <Square value={squares[4]} onSquareClick={() => setSquare(4)} />
          <Square value={squares[5]} onSquareClick={() => setSquare(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => setSquare(6)} />
          <Square value={squares[7]} onSquareClick={() => setSquare(7)} />
          <Square value={squares[8]} onSquareClick={() => setSquare(8)} />
        </div>
      </div>
    </div>
  );
}
