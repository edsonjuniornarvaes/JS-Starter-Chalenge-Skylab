(function () {
  let div1 = document.getElementById("div1");
  let addName = document.getElementById("addName");
  let nomes = ["Diego", "Gabriel", "Lucas"];

  let ul = document.createElement("ul");
  div1.appendChild(ul);

  let li = "";
  for (let i = 0; i < nomes.length; i++) {
    li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = nomes[i];
  }
})();
