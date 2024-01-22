const node = document.querySelector('.display');
setInterval(function(){
    let date = new Date();
    node.innerHTML=date.toLocaleTimeString();
},(1000));
