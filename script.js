questionAnswers={
    "hi":"hi buddy!!!!",
}



document.querySelector("#queries").addEventListener("keypress", (event)=>{
if(event.key==='Enter'){
    talk(event)
}
} )

const talk=(event)=>{
   // var question = document.getElementById("queries").value;
    console.log(event)
   var question = event.target.value;
    if (question in questionAnswers){
        document.getElementById("reply").innerHTML+=questionAnswers[question] + "<br>";
    }else{
        document.getElementById("reply").innerHTML+="Can't Understand..."+"<br>";
    }
}