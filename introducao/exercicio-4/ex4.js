(function () {
    let atv4 = document.getElementById('atv4');
    let setXp = document.getElementById('setXp');
    let iptD4 = document.createElement('input');
    let btnD4 = document.createElement('button');
    let txtBt4 = document.createTextNode('Verifique o nível!');
    iptD4.setAttribute('placeholder', 'Verificar o nível');
    iptD4.setAttribute('class', 'form-control col-4');
    btnD4.setAttribute('class', 'btn btn-success');

  
    btnD4.appendChild(txtBt4);
    atv4.appendChild(iptD4);
    atv4.appendChild(btnD4);
  
    let experiencia = (anos) => {
  
      let returnYears = (years) => {
        let setAnos = document.createTextNode(`Seu nível de Experiência é: [ ${years} ]`);
        setXp.appendChild(setAnos);
      }
      
      if(anos < 1) {  
        anos = 'Iniciante';
        returnYears(anos);
      }
  
      if(anos >= 1 && anos < 3) {
        anos = 'Intermediário';
        returnYears(anos);
      }
  
      if(anos >= 3 && anos <= 6) {
        anos = 'Avançado';
        returnYears(anos);
      }
  
      if(anos >= 7) {
        anos = 'Jedi Master';
        returnYears(anos);
      }
    }
  
    btnD4.addEventListener('click', function() {
  
      let setXp = document.getElementById('setXp');
      setXp.innerHTML = ""
  
      getXp = iptD4.value;
      experiencia(getXp);
    });
  })();
  