(function () {
  let atv2 = document.getElementById("atv2");

  var pares = [];
  function exibePar(n1, n2) {
    while (n1 <= n2) {
      if (n1 % 2 == 0) {
        pares.push(n1);
      }
      n1++;
    }
  }

  exibePar(2, 106);

  let txtPares = document.createTextNode(pares);
  atv2.appendChild(txtPares);
})();
