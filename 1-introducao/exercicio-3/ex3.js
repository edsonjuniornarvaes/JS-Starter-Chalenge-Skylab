(function () {
    let atv3 = document.getElementById("atv3");
  
    let txtHas = "";
    let hasSkills = (getSkills) => {
      
      let iptParam = document.createElement("input");
      let btnParam = document.createElement("button");
      let txtBtn = document.createTextNode("Verificar");
      btnParam.appendChild(txtBtn);
      iptParam.setAttribute('placeholder', 'Verifique habilidade');
      iptParam.setAttribute('class', 'form-control col-4');
      btnParam.setAttribute('class', 'btn btn-success');
  
      atv3.appendChild(iptParam);
      atv3.appendChild(btnParam);
  
      let iptVal = "";
  
      btnParam.addEventListener("click", function () {
        let spanHas = document.getElementById("spanHas");
        spanHas.innerHTML = "";
  
        let setParam = (param) => {
          let has = getSkills.indexOf(param);
          txtHas =
            has != -1
              ? ` ${param} | Você possui esta habilidade`
              : ` ${param} | Você não possui esta habilidade`;
  
          let getTxtHas = document.createTextNode(` ${txtHas} `);
          spanHas.appendChild(getTxtHas);
          iptParam.value = "";
        };
  
        iptVal = iptParam.value;
        setParam(iptVal);
      });
    };
  
    let skills = ["Javascript", "PHP", "React"];
    hasSkills(skills);  
  })();
  