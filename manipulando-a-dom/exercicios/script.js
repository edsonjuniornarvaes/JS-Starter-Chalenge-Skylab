(function () {
  let adDiv = document.getElementById("myBody");
  let btn = document.getElementById("more");
  let div1 = document.getElementById("div1");
  let nomes = ["Diego", "Gabriel", "Lucas"];

  let ul = document.createElement("ul");
  div1.appendChild(ul);

  let li = "";
  for (let i = 0; i < nomes.length; i++) {
    li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = nomes[i];
  }

  let ipt = document.createElement("input");
  let addNameButton = document.createElement("button");

  div1.appendChild(ipt);
  div1.appendChild(addNameButton);

  let txtBtn = document.createTextNode("Adicionar Nome");
  addNameButton.appendChild(txtBtn);

  addNameButton.addEventListener("click", function () {
    let iptVal = ipt.value;
    let newLi = document.createElement("li");
    ul.appendChild(newLi);
    newLi.innerHTML = iptVal;
    ipt.value = "";
  });

  let x = 0;

  btn.addEventListener("click", function () {
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    let newColor = getRandomColor(); // #E943F0
    let newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.marginTop = "10px";
    newDiv.style.height = "50";
    newDiv.style.background = newColor;

    adDiv.appendChild(newDiv);

    x++;

    return newDiv;
  });
})();
