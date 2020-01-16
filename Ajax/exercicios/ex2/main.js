function manipulaLista(container, texto){
    var lista = document.createElement('ul'),
        itemLista = document.createElement('li');
        texto = document.createTextNode(texto);
    lista.innerHTML = 'SEUS REPOSITÓRIOS';
    itemLista.appendChild(texto);
    lista.appendChild(itemLista);
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
        manipulaLista(container, '')
        btn.onclick = function(){
            var nick = document.querySelector('input').value;
            
            axios.get('https://api.github.com/users/'+nick+'/repos')
            .then(function(response){
                console.log(response);
                for(r of response){
                    var item = document.createElement('li'),
                        itemtexto = document.createTextNode(r.name);
                        item.appendChild(itemtexto);
                        lista.appendChild(item);
                        manipulaLista(container, r.name);
                }         
            })
            .catch(function(error){
                alert(error);
            });
        }
}
main();