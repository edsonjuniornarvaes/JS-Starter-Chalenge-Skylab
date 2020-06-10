(function() {
    let atv2 = document.getElementById('atv2')
    let rowIpt = document.createElement('input');
    let rowBtn = document.createElement('button');
    rowIpt.setAttribute('placeholder', 'Buscar com nome de usuário pela api do Github');

    atv2.appendChild(rowIpt);
    atv2.appendChild(rowBtn);
    rowBtn.setAttribute('class', 'btn btn-success');
    rowIpt.setAttribute('class', 'form-control col-4');
    let txtBtn = document.createTextNode('Buscar');
    rowBtn.appendChild(txtBtn);

})();