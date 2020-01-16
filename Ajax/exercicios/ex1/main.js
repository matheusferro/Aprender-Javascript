function checaidade(idade){
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            resolve();
        }else{
            reject();
        }
    });
}

checaidade(18)
.then(function(){
    console.log('Maior');
}).catch(function(){
    console.log('Menor');
});