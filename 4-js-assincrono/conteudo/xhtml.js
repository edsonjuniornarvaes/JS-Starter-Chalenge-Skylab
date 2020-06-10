let myPromise = () => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "https://api.github.com/users/diego3g");
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição!!");
        }
      }
    };
  });
};

myPromise()
  .then((response) => console.log(response))
  .catch((error) => console.warn(error));
