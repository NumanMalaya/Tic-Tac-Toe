interface Props {
  squares: Array<number | null>;
}

function Check(squares: Array<number | null>): string | null {
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
      return `${squares[a]} wins the match!`;
    }
  }

  if (squares.every((square) => square !== null)) {
    return "No one wins the match!";
  }

  return null;
}

export default function CheckWinner({ squares }: Props) {
  const status = Check(squares);

  return (
    <>
      {status && (
        <>
          <div className="alert alert-primary">{status}</div>
          <button
            className="restartBtn btn btn-success"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
        </>
      )}
    </>
  );
}
