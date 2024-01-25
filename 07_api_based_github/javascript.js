const api_url = 'https://api.github.com/users/anshydv18';
const image = document.getElementById('image');
const name = document.getElementById('name');
const username = document.getElementById('username');
console.log(image);
const xhr = new XMLHttpRequest();
xhr.open('GET',api_url);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4) {
    let data =JSON.parse(this.responseText);
    image.innerHTML=`<img src="${data.avatar_url}" alt="W3Schools.com" id="real" width=300>`
    name.innerHTML = `<h3>${data.name} </h3>`
    username.innerHTML = `<h3> Github Username: ${data.login}</h3>`
    //the data we getten from the api is string
    
    console.log(data);
}
}
xhr.send();
