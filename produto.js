window.onload = function() {
  let quantidadesSalvas = JSON.parse(localStorage.getItem('estoque')) || {};

  if (Object.keys(quantidadesSalvas).length === 0) {
    quantidadesSalvas = {
      'Lâmpada': 50,
      'Creme de hidratação': 50,
      'Air Fryer': 50,
      'Desodorante': 50,
      'Panela elétrica': 50,
      'Porta retrato': 50,
      'Ventilador': 50,
      'Carregador portátil': 50,
      'Sapato': 50,
      'Mouse': 50,
      'Garrafa': 50,
      'Teclado': 50,
      'Cafeteira': 50,
      'Maquiagem': 50,
      'Liquidificador': 50,
      'Notebook': 50,
      'Fone': 50,
      'Projetor': 50,
      'Caixa de som': 50,
      'Biscoito': 50,
      'tv 60"': 50,
      'Cabo': 50
    };
    localStorage.setItem('estoque', JSON.stringify(quantidadesSalvas));
  }

  const corpoTabela = document.getElementById('corpoTabela');
  corpoTabela.innerHTML = '';

  for (const produto in quantidadesSalvas) {
    const quantidade = quantidadesSalvas[produto];
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${produto}</td>
      <td class="quantidade" data-produto="${produto}">${quantidade}</td>
      <td><button>Usar 1</button></td>
    `;

    corpoTabela.appendChild(linha);
  }

  document.querySelectorAll('#tabelaEstoque button').forEach(botao => {
    botao.addEventListener('click', function() {
      baixarEstoque(botao);
    });
  });

  document.getElementById('resetEstoque').addEventListener('click', function() {
    const estoquePadrao = {
      'Lâmpada': 50,
      'Creme de hidratação': 50,
      'Air Fryer': 50,
      'Desodorante': 50,
      'Panela elétrica': 50,
      'Porta retrato': 50,
      'Ventilador': 50,
      'Carregador portátil': 50,
      'Sapato': 50,
      'Mouse': 50,
      'Garrafa': 50,
      'Teclado': 50,
      'Cafeteira': 50,
      'Maquiagem': 50,
      'Liquidificador': 50,
      'Notebook': 50,
      'Fone': 50,
      'Projetor': 50,
      'Caixa de som': 50,
      'Biscoito': 50,
      'tv 60"': 50,
      'Cabo': 50
    };
    localStorage.setItem('estoque', JSON.stringify(estoquePadrao));
    location.reload();
  });
};

function baixarEstoque(botao) {
  const linha = botao.closest("tr");
  const celulaQuantidade = linha.querySelector(".quantidade");
  const produto = celulaQuantidade.dataset.produto;
  let quantidade = parseInt(celulaQuantidade.textContent);

  if (quantidade > 0) {
    quantidade--;
    celulaQuantidade.textContent = quantidade;
    salvarEstoque(produto, quantidade);
  } else {
    alert("Estoque zerado!");
  }
}

function salvarEstoque(produto, quantidade) {
  const quantidadesSalvas = JSON.parse(localStorage.getItem('estoque')) || {};
  quantidadesSalvas[produto] = quantidade;
  localStorage.setItem('estoque', JSON.stringify(quantidadesSalvas));
}
