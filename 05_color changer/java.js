let node = document.getElementById('container');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color= '#';
    for(let i=0;i<6;i++){
        color+=(hex[Math.floor(Math.random()*16)]);
    }
    return color;
}
let setIntervalid ;
const changecolor = function(){
    if(!setIntervalid) setIntervalid = setInterval(changebg,500);
    function changebg(){node.style.backgroundColor=randomcolor();}
}

start.addEventListener('click',changecolor,false);
stop.addEventListener('click',function(){
    clearInterval(setIntervalid);
    setIntervalid=null;
})