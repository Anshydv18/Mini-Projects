const node = document.querySelector('form');
node.addEventListener('submit',function(e){
    e.preventDefault();
    //we have to pickup the integer value from the input

    const height  = parseInt(document.getElementById('Height').value);
    const weight  = parseInt(document.getElementById('Weight').value);

    let result = document.querySelector('.result');
    if(isNaN(height) || height<0 || height==0){
        alert("not valid");
        result.innerHTML = '<h2> Enter a valid height</h2>'
    }
    else if(isNaN(weight) || weight<0 || weight==0){
        alert("not valid");
        result.innerHTML = '<h2> Enter a valid weight </h2>'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
    }
})