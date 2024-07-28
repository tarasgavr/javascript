window.scrollBtn.onclick=()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth',
  })
}
let isDisplay=false;
setInterval(()=>{
  if (window.scrollY>window.innerHeight && isDisplay===false) {
    isDisplay=true;
    window.scrollBtn.style.display='flex'
  }
  if (window.scrollY<=window.innerHeight && isDisplay===true) {
    isDisplay=false;
    window.scrollBtn.style.display='none'
  }
},500)