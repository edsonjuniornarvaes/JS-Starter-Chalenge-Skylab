(function () {
  let atv1 = document.getElementById("atv1");
  let getAge = document.getElementById("getAge");
  let ipt = document.createElement("input");
  let but = document.createElement("button");
  let txtIpt = document.createTextNode("Verificar maioridade");

  ipt.setAttribute("placeholder", "Verificar maioridade");
  ipt.setAttribute("class", "form-control col-4");
  but.setAttribute("class", "btn btn-success");
  atv1.appendChild(ipt);
  atv1.appendChild(but);
  but.appendChild(txtIpt);

  function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function (resolve, reject) {
      if (idade >= 18 && idade != "") {
        setTimeout(() => {
          resolve();
        }, 2000);
      }
      if (idade < 18 && idade != "") {
        setTimeout(() => {
          reject();
        }, 2000);
      }
    });
  }

  let iptVal = "";

  but.addEventListener("click", function () {
    getAge.innerHTML = "";
    iptVal = ipt.value;
    ipt.value = "";
    checaIdade(iptVal)
      .then(function () {
        let insere = document.createTextNode(
          ` ${iptVal} anos | Maior de idade`
        );
        getAge.appendChild(insere);
        console.log("Maior que 18");
      })
      .catch(function () {
        let insere = document.createTextNode(
          ` ${iptVal} anos | Menor de idade`
        );
        getAge.appendChild(insere);
        console.log("Menor que 18");
      });
  });
})();
