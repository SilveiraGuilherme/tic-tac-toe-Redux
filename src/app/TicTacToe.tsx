import { useAppDispatch, useAppSelector } from './store';

export function TicTacToe() {
  const state = useAppSelector(state => state.ticTacToe);
  const dispatch = useAppDispatch();

  return (
    <div className="ticTacToe">
      {state.winner !== '?' && (
        <>
          {state.winner === '=' && <div>It's a tie!</div>}
          {state.winner === '=' && (
            <div>
              Winner: <strong>{state.winner}</strong>
            </div>
          )}
        </>
      )}
      {state.winner === '?' && <div>It's {state.nextPlayer} player turn</div>}
      <div>{state.nextPlayer} player turn</div>
      <table>
        <body>
          {state.board.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  onClick={() => dispatch({ type: 'play', payload: { i, j } })}
                  key={j}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </body>
      </table>
      <button onClick={() => dispatch({ type: 'reset' })}>Restart match</button>
    </div>
  );
}
