interface Props {
  squares: Array<number | null>;
}
export default function checkWinner({ squares }: Props) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return (
        <>
          <div className="alert alert-primary">
            {squares[a]} wins the match!
          </div>
          <button
            className="restartBtn btn btn-success"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
        </>
      );
    }
  }
  return null;
}
