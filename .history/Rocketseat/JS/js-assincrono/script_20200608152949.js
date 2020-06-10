let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/diego3g');

xhr.send(null)
console.log(xhr)

xhr.onreadystatechange == function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr));
        
    }
}