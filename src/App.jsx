import { useState } from 'react';
import './App.css';

function App() {
  const [jogador, setJogador] = useState("X");
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [vencedor, setVencedor] = useState(null);

  function verificaVencedor(novoTabuleiro) {
    const combinacoesVitoria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (novoTabuleiro[a] && novoTabuleiro[a] === novoTabuleiro[b] && novoTabuleiro[a] === novoTabuleiro[c]) {
        return novoTabuleiro[a];
      }
    }
    return null;
  }

  function marca(index) {
    if (vencedor || tabuleiro[index]) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogador;

    const vencedorAtual = verificaVencedor(novoTabuleiro);

    if (vencedorAtual) {
      setVencedor(vencedorAtual);
    } else {
      setJogador(jogador === "X" ? "O" : "X");
    }

    setTabuleiro(novoTabuleiro);
  }

  function reiniciarJogo() {
    setTabuleiro(Array(9).fill(null));
    setJogador("X");
    setVencedor(null);
  }

  return (
    <>
      <div>
        <h1>Jogo da Velha</h1>
        <h2>Alunos:</h2>
        <p>Matheus Cruz, Ian Novatzki, Pedro Aleksander e Vinicius Rodrigues</p>
        <table border="1" className="tabela">
          <tbody>
            <tr>
              <td onClick={() => marca(0)}>{tabuleiro[0]}</td>
              <td onClick={() => marca(1)}>{tabuleiro[1]}</td>
              <td onClick={() => marca(2)}>{tabuleiro[2]}</td>
            </tr>
            <tr>
              <td onClick={() => marca(3)}>{tabuleiro[3]}</td>
              <td onClick={() => marca(4)}>{tabuleiro[4]}</td>
              <td onClick={() => marca(5)}>{tabuleiro[5]}</td>
            </tr>
            <tr>
              <td onClick={() => marca(6)}>{tabuleiro[6]}</td>
              <td onClick={() => marca(7)}>{tabuleiro[7]}</td>
              <td onClick={() => marca(8)}>{tabuleiro[8]}</td>
            </tr>
          </tbody>
        </table>
        <h2>Próximo jogador: {jogador}</h2>
        {vencedor && <p>Vitória de {vencedor}</p>}
        <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
      </div>
    </>
  );
}

export default App;
