document.querySelectorAll('a').forEach(a=>{
  a.onclick = function(e){
    if(this.hash){
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({behavior:'smooth'});
    }
  }
});
