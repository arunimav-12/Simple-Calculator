let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button')
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
              buttonText=e.target.innerText;
              console.log('Button text is', buttonText)  

              if(buttonText=='='){
                screen.value=eval(screenValue);
              }
              else if(buttonText=="back"){
                   var num=screen.value;
                   var len=num.length-1;
                   var newnum=num.substring(0,len);
                   screen.value=newnum;
                   screenValue=screen.value;
              }
              else if(buttonText=='C'){
                screenValue="";
                screen.value=screenValue;
              }
              else{
                screenValue+=buttonText;
                screen.value=screenValue;
              }
    })
}