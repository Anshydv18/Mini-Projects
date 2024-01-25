const node = document.getElementById('container');
window.addEventListener('keydown',(e)=>{
    let res = document.getElementById('table');
    res.innerHTML=`
    <div>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td> ${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   </table> 
    </div>
    `
},false)