let bdy = document.querySelector("body");
let ipt = document.createElement("input");
let but = document.createElement("button");
let txtIpt = document.createTextNode("Verificar maioridade");
let txtp = document.createElement("p");

bdy.appendChild(ipt);
bdy.appendChild(but);
but.appendChild(txtIpt);
ipt.setAttribute("placeholder", "Verificar maioridade");
bdy.appendChild(txtp);

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
  txtp.innerHTML = "";
  iptVal = ipt.value;
  checaIdade(iptVal)
    .then(function () {
      let insere = document.createTextNode("Maior que 18");
      txtp.appendChild(insere);
      console.log("Maior que 18");
    })
    .catch(function () {
      let insere = document.createTextNode("Menor que 18");
      txtp.appendChild(insere);
      console.log("Menor que 18");
    });
});


/* -- ex 2 -- */
let
