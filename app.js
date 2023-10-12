let userInput=document.getElementById('userInput');
let result=document.getElementById("result")



const display=(val)=>{
userInput.value +=val
}

const showResult=()=>{    
    try{let showResult = eval(userInput.value);
    console.log(showResult);
   result.innerHTML=showResult}catch{
    result.innerHTML="error"
   }
}

const clearInput=()=>{
    userInput.value=''
}





