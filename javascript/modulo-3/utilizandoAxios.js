axios.get('https://api.github.com/users/caiocichetti')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
