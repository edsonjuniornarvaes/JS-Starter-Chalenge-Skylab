let ulElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
];

let renderTodos = () => {
    ulElement.innerHTML = "";

    for (todo of todos) {

        let liElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        let aLink = document.createElement('a');
        aLink.setAttribute('href', '#');
        let aTxt = document.createTextNode('Excluir');
        aLink.appendChild(aTxt);
        let pos = todos.indexOf(todo);
        aLink.setAttribute('onclick', `deleteTodo(${pos})`);
    
        liElement.appendChild(todoText);
        liElement.appendChild(aLink);
        ulElement.appendChild(liElement);

    }
}

renderTodos();

let addTodo = () => {
    let todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

let deleteTodo = (pos) => {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

// let saveToStorage = () => {
//     localStorage.setItem('list_todos', JSON.stringify(todos))
//     renderTodos();
// }
