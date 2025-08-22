const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
const listcompleted= document.getElementById('list-completed')
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{ 
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        // listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // Unicode for multiplication sign
        li.appendChild(span);
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value='';
    

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        moveToCompleted(e.target)
    }
    else if(e.target.tagName==="SPAN"){
        // completed(e.target.parentElement);
        e.target.parentElement.remove();
        saveData();
    }
},false)

listcompleted.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveCompleteData();
    }
})

function moveToCompleted(task){
    task.classList.add("checked");
    listContainer.removeChild(task);
    // task.querySelector("span")?.remove();
    listcompleted.appendChild(task);
    saveData();
    saveCompleteData();
}


function saveData(){
    localStorage.setItem("incompleted", listContainer.innerHTML);
}
function saveCompleteData(){
    localStorage.setItem("completed", listcompleted.innerHTML);
}


function showTask(){
    listContainer.innerHTML=localStorage.getItem("incompleted")|| "";
    listcompleted.innerHTML=localStorage.getItem("completed")|| "";
}
showTask(); 