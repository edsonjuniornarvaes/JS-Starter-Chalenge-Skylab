(function () {
  let atv1 = document.getElementById("atv1");

  var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
  };

  var insereTxt = document.createTextNode(
    `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" n° ${endereco.numero}.`
  );

  atv1.appendChild(insereTxt);
})();
