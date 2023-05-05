function component(){
    var element = document.createElement('p');
    element.innerHTML = ('Hello world');
    return element;
}

document.body.appendChild(component());
