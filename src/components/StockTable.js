import React, { useState, useEffect } from 'react';

const StockTable = () => {
  const [produtos, setProdutos] = useState(() => {
    const saved = localStorage.getItem('produtos');
    return saved ? JSON.parse(saved) : [];
  });
  const [codigo, setCodigo] = useState('');
  const [produto, setProduto] = useState('');
  const [valorVenda, setValorVenda] = useState('');
  const [data, setData] = useState('');
  const [totalEstoque, setTotalEstoque] = useState(0);
  const [totalVendido, setTotalVendido] = useState(0);

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtos));
    calcularTotalEstoque();
    calcularTotalVendido();
  }, [produtos]);

  const handleAddProduto = () => {
    const newProduto = { codigo, produto, valorVenda, data, vendido: false };
    setProdutos([...produtos, newProduto]);
    setCodigo('');
    setProduto('');
    setValorVenda('');
    setData('');
  };

  const handleVenderProduto = (codigo) => {
    const updatedProdutos = produtos.map((p) =>
      p.codigo === codigo ? { ...p, vendido: true } : p
    );
    setProdutos(updatedProdutos);
  };

  const handleExcluirProduto = (codigo) => {
    const updatedProdutos = produtos.filter((p) => p.codigo !== codigo);
    setProdutos(updatedProdutos);
  };

  const calcularTotalEstoque = () => {
    const total = produtos
      .filter((p) => !p.vendido)
      .reduce((sum, p) => sum + parseFloat(p.valorVenda), 0);
    setTotalEstoque(total);
  };

  const calcularTotalVendido = () => {
    const total = produtos
      .filter((p) => p.vendido)
      .reduce((sum, p) => sum + parseFloat(p.valorVenda), 0);
    setTotalVendido(total);
  };

  return (
    <div>
      <h2>Estoque</h2>
      <input
        type="text"
        placeholder="Código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Produto"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Valor da Venda"
        value={valorVenda}
        onChange={(e) => setValorVenda(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddProduto}>Adicionar Produto</button>
      <h3>Estoque</h3>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Valor da Venda</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos
            .filter((p) => !p.vendido)
            .map((p) => (
              <tr key={p.codigo}>
                <td>{p.codigo}</td>
                <td>{p.produto}</td>
                <td>R$ {p.valorVenda}</td>
                <td>{p.data}</td>
                <td>
                  <button onClick={() => handleVenderProduto(p.codigo)}>Vender</button>
                  <button onClick={() => handleExcluirProduto(p.codigo)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>Produtos Vendidos</h3>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Valor da Venda</th>
            <th>Data</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos
            .filter((p) => p.vendido)
            .map((p) => (
              <tr key={p.codigo}>
                <td>{p.codigo}</td>
                <td>{p.produto}</td>
                <td>R$ {p.valorVenda}</td>
                <td>{p.data}</td>
                <td>
                  <button onClick={() => handleExcluirProduto(p.codigo)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3>Total em Estoque: R$ {totalEstoque.toFixed(2)}</h3>
      <h3>Total Vendido: R$ {totalVendido.toFixed(2)}</h3>
    </div>
  );
};

export default StockTable;
