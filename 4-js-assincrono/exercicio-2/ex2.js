(function() {
    let atv2 = document.getElementById('atv2');
    let div1 = document.getElementById('div1');
    let rowIpt = document.createElement('input');
    let rowBtn = document.createElement('button');
    let ul = document.createElement('ul');
    div1.appendChild(ul);
    rowIpt.setAttribute('placeholder', 'Buscar com nome de usuário pela api do Github');

    atv2.appendChild(rowIpt);
    atv2.appendChild(rowBtn);
    rowBtn.setAttribute('class', 'btn btn-success');
    rowIpt.setAttribute('class', 'form-control col-4');
    let txtBtn = document.createTextNode('Buscar');
    rowBtn.appendChild(txtBtn);

    rowBtn.addEventListener('click', function() {
        let user = rowIpt.value;

        ul.textContent = ""

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(function(response){    
                let acess = Object.values(JSON.parse(response.request.responseText));
                acess.forEach(element => {
                    let li = document.createElement('li');
                    let text = document.createTextNode(element.name)
                    li.appendChild(text);
                    ul.appendChild(li);
                });
            })
            .catch(function(){
                let li = document.createElement('li');                
                let txtEmpty = document.createTextNode("Usuário inexistente!")
                li.appendChild(txtEmpty);
                ul.appendChild(li);
            })

    });
    
})();