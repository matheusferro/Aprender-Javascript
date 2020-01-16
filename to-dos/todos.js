var listElement = document.querySelector('#app ul'),
    inputElement = document.querySelector('#app input'),
    buttonElement = document.querySelector('#app button');

var atividades = JSON.parse(localStorage.getItem('lista_atividades')) || [];

function render(){
    listElement.innerHTML = '';
    for(atividade of atividades){
        var todoElement = document.createElement('li'),
            todoText = document.createTextNode(atividade),
            linkElement = document.createElement('a'),
            linkText = document.createTextNode('EXCLUIR');
            
            linkElement.setAttribute('href','#');
            
            var pos = atividades.indexOf(atividade);
            linkElement.setAttribute('onclick','del('+pos+')');
            linkElement.appendChild(linkText);
            todoElement.appendChild(todoText);
            todoElement.appendChild(linkElement);
            listElement.appendChild(todoElement);
    }
}
render();
function add(){
    var todoText = inputElement.value;
    atividades.push(todoText);
    inputElement.value = '';
    render();
    save();
}

buttonElement.onclick = add;

function del(pos){
    atividades.splice(pos, 1);
    render();
    save();
}

function save(){
    localStorage.setItem('lista_atividades', JSON.stringify(atividades));
}