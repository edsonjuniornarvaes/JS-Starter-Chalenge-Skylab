// Exercícios: Módulo 01
(function () {
    
    let setArr = document.getElementById('setArr');
  
    var usuarios = [
      {
        nome: "Edson",
        habilidades: ["Javascript", "PHP", "Twig"]
      },
      {
        nome: "Junior",
        habilidades: ["ReactJs", "React Native", "Ecmascript"]
      }
    ]
  
    for(var i = 0; i <usuarios.length; i++) {
      console.log(usuarios[i]);
    }
  
    usuarios.forEach(params => {
      let insertDate = document.createTextNode(`O ${params.nome} possui as habilidades: ${params.habilidades.join(' - ')}! `);
      setArr.appendChild(insertDate);
    });
  
  })();
  