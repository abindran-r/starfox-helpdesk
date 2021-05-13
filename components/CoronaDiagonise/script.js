questions=["Can you sense taste ?","Are you having any fever ?","Do you have breathing issues ?"]

const q1=()=> {
    document.getElementById("questions").innerHTML=questions[0];
    }
const q2=()=> {
    document.getElementById("questions").innerHTML=questions[1];
    }
const q3=()=> {
    document.getElementById("questions").innerHTML=questions[2];
    }



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