(function () {

    let atv1 = document.getElementById("atv1");
    let divColor = document.getElementById("divColor");
  
  
    let colorButton = document.createElement("button");
  
    divColor.appendChild(colorButton);
  
    let txtBtn = document.createTextNode("Adicionar cor");
    colorButton.appendChild(txtBtn);
  
  
    colorButton.setAttribute("class", "btn btn-success  col-12");
  
    let x = 0;
  
    colorButton.addEventListener("click", function () {
  
      let newDiv = document.createElement("div");
      newDiv.style.width = "100px";
      newDiv.style.marginTop = "10px";
      newDiv.style.height = "50";
      newDiv.style.background = "#ff0000";
  
      atv1.appendChild(newDiv);
  
      x++;
  
      return newDiv;
    });
  })();
  