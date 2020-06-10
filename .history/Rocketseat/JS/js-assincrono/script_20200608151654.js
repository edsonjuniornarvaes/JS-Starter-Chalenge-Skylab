let xhr = XMLHttpRequest();
console.log(xhr)

xhr.open('GET', 'https://api.github.com/users/diego3g');
console.log(xhr);

xhr.send(null)