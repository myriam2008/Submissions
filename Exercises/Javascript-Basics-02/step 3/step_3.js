var x=document.createElement('div');
    document.body.appendChild(x);
    var m = document.querySelector('#name');
    m.addEventListener('keyup',function(){
      x.innerHTML=m.value;
    })