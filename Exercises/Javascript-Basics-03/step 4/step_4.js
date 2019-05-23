var x = document.getElementById('password');
    var y = document.getElementById('confirmation');
    var z = document.querySelector('button');
    z.addEventListener('click',function(){
      if(x.value!=y.value){
        x.style.borderColor='red'
        y.style.borderColor='red'
      }
});