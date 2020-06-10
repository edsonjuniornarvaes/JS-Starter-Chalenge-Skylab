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
  
    let ipt = document.createElement("input");
  
    let btn = document.createElement("button");
    let txtBtn = document.createTextNode("Adicionar Nome");
    btn.appendChild(txtBtn);
  
    addName.appendChild(ipt);
    addName.appendChild(btn);
  
    ipt.setAttribute("placeholder", "Adicionar nome");
    ipt.setAttribute("class", "form-control col-4");
    btn.setAttribute("class", "btn btn-success");
  
    btn.addEventListener("click", function () {
      let iptVal = ipt.value;
      let newLi = document.createElement("li");
      ul.appendChild(newLi);
      newLi.innerHTML = iptVal;
      ipt.value = "";
    });
  })();
  