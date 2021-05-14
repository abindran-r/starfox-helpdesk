var progression=0;
function checkingSymptoms(target){
    // var checkBox = document.getElementById("mycheck");
    if(target.checked===true){
        progression+=1;
    }else{
        progression-=1;
    }
    progressBar();
}

const progressBar=()=>{
    var ele=document.getElementById("coloring");
    var ele1=document.getElementById("reply");
    if (progression===0){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:0%");
        document.getElementById("reply").innerHTML=" ";
    }else if(progression===1){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:20%");
        ele.classList.add("bg-success");
        ele.classList.remove("bg-danger");
        ele.classList.remove("bg-warning");
       document.getElementById("reply").innerHTML="Don't Worry Stay Home!!! Stay Safe !!!";
       ele1.classList.add("green");
       ele1.classList.remove("red");
       ele1.classList.remove("bold");
    }else if(progression===2){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:40%");
    }else if(progression===3){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:60%");
        document.getElementById("reply").innerHTML="Must Consult a Doctor!!!";
        ele.classList.remove("bg-success");
        ele.classList.add("bg-warning");
        ele.classList.remove("bg-danger");
        ele1.classList.add("red");
        ele1.classList.remove("green");
        ele1.classList.remove("bold");
    }else if(progression===4){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:80%");
    }else if(progression===5){
        document.getElementsByClassName("progress-bar")[0].setAttribute("style", "width:100%");
        ele.classList.remove("bg-warning");
        ele.classList.add("bg-danger");
        ele1.classList.add("red");
        ele1.classList.add("bold");
        ele1.classList.remove("green");
    }
}