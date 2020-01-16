axios.get('https://api.github.com/users/matheusferro')
.then(function(response){
    console.log(response);
    console.log(response.data.avatar_url);
})
.catch(function(error){
    console.warn(error);
});
//no lugar do get pode ser post, put, delete e informar a url, 
//informando parametros com a virgula