import React, { useState, useEffect } from 'react';

const MonthlySummary = () => {
  const [produtos, setProdutos] = useState(() => {
    const saved = localStorage.getItem('produtos');
    return saved ? JSON.parse(saved) : [];
  });
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [totalEstoque, setTotalEstoque] = useState(0);
  const [totalVendido, setTotalVendido] = useState(0);
  const [meses, setMeses] = useState([]);

  useEffect(() => {
    const mesesUnicos = [
      ...new Set(produtos.map((p) => p.data.split('/')[1] + '/' + p.data.split('/')[2])),
    ];
    setMeses(mesesUnicos);
  }, [produtos]);

  const handleMesClick = (mes) => {
    setMesSelecionado(mes);
    const produtosDoMes = produtos.filter(
      (p) => p.data.split('/')[1] + '/' + p.data.split('/')[2] === mes
    );
    const totalEstoqueMes = produtosDoMes
      .filter((p) => !p.vendido)
      .reduce((sum, p) => sum + parseFloat(p.valorVenda), 0);
    const totalVendidoMes = produtosDoMes
      .filter((p) => p.vendido)
      .reduce((sum, p) => sum + parseFloat(p.valorVenda), 0);
    setTotalEstoque(totalEstoqueMes);
    setTotalVendido(totalVendidoMes);
  };

  return (
    <div>
      <h2>Resumo Mensal</h2>
      <div>
        {meses.map((mes, index) => (
          <button key={index} onClick={() => handleMesClick(mes)}>
            {mes}
          </button>
        ))}
      </div>
      {mesSelecionado && (
        <>
          <h3>Resumo de {mesSelecionado}</h3>
          <p>Total em Estoque: R$ {totalEstoque.toFixed(2)}</p>
          <p>Total Vendido: R$ {totalVendido.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default MonthlySummary;
