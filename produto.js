window.onload = function() {
  let quantidadesSalvas = JSON.parse(localStorage.getItem('estoque')) || {};

  if (Object.keys(quantidadesSalvas).length === 0) {
    quantidadesSalvas = {
      'Lâmpada': 20,
      'Creme de hidratação': 15,
      'Air Fryer': 17,
      'Desodorante': 24,
      'Panela elétrica': 30,
      'Porta retrato': 17,
      'Ventilador': 25,
      'Carregador portátil': 19,
      'Sapato': 19,
      'Mouse': 32,
      'Garrafa': 24,
      'Teclado': 40,
      'Cafeteira': 37,
      'Maquiagem': 22,
      'Liquidificador': 13,
      'Notebook': 8,
      'Fone': 35,
      'Projetor': 45,
      'Caixa de som': 36,
      'Biscoito': 18,
      'tv 60"': 13,
      'Cabo': 28
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
      'Lâmpada': 20,
      'Creme de hidratação': 15,
      'Air Fryer': 17,
      'Desodorante': 24,
      'Panela elétrica': 30,
      'Porta retrato': 17,
      'Ventilador': 25,
      'Carregador portátil': 19,
      'Sapato': 19,
      'Mouse': 32,
      'Garrafa': 24,
      'Teclado': 40,
      'Cafeteira': 37,
      'Maquiagem': 22,
      'Liquidificador': 13,
      'Notebook': 8,
      'Fone': 35,
      'Projetor': 45,
      'Caixa de som': 36,
      'Biscoito': 18,
      'tv 60"': 13,
      'Cabo': 28
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
