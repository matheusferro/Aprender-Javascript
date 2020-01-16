var minhapromisse = function(nick){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+nick+'/repos');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('CERTIFIQUE-SE QUE FOI DIGITADO CORRETAMENTE O NOME');
                }
            }
        }
    });
};

function renderList(container){
    var lista = document.createElement('ul');
    lista.innerHTML = 'SEUS REPOSITÓRIOS';
    container.appendChild(lista);
}

function main(){
    var container = document.querySelector('#app'),
        inputElement = document.createElement('input'),
        btn = document.createElement('button');
        

        btn.innerHTML = 'Busca';
        inputElement.setAttribute('type','text');
        inputElement.setAttribute('placeholder','Nome no github.');

        container.appendChild(inputElement);
        container.appendChild(btn);
        
        renderList(container);
        btn.onclick = function(){
            var nick = document.querySelector('input').value,
            lista = document.querySelector('ul');
            
            container.removeChild(lista);
            renderList(container);
            lista = document.querySelector('ul');
            minhapromisse(nick)
            .then(function(response){
                console.log(response);
                for(r of response){
                    var item = document.createElement('li'),
                        itemtexto = document.createTextNode(r.name);
                        item.appendChild(itemtexto);
                        lista.appendChild(item); 
                }         
            })
            .catch(function(error){
                alert(error);
            });
        }
}
main();
