
const inputBox=document.getElementById("input-box");
const listConatiner=document.getElementById("list-Conatiner");
function addTask(){
if(inputBox.value===''){
alert("you must write something!");
}
else{
let li=document.createElement("li");
li.innerHTML=inputBox.value;
listConatiner.appendChild(li);
let span=document.createElement("span");
span.innerHtml="\u00d7";
li.appendChild(span);
}
inputBox.value="";
saveData();
}
listContainer.addEventListener("click",function(e){
if(e.target.tagname==="LI"){
e.target.classList.toggle("checked");
saveData();
}
else if(e.target.tagname==="SPAN"){
e.target.parentElement.remove();
saveData();
}
},false);
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
