(function () {
  let atv2 = document.getElementById("atv2");
  let divColors = document.getElementById("divColors");


  let colorButton = document.createElement("button");

  divColors.appendChild(colorButton);

  let txtBtn = document.createTextNode("Adicionar cor");
  colorButton.appendChild(txtBtn);


  colorButton.setAttribute("class", "btn btn-success  col-12");

  let x = 0;

  colorButton.addEventListener("click", function () {
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

    atv2.appendChild(newDiv);

    x++;

    return newDiv;
  });
})();
