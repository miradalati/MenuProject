fetch('https://miradalati.github.io/MenuProject/')
      .then(response => response.json())
      .then(json => console.log(json))