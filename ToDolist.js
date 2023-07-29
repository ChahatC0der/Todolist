const TodotextNode=document.getElementById("task-input");
const addTodo=document.getElementById("submit-btn");
//console.log(TodotextNode);
const username = prompt("Enter your name");
addTodo.addEventListener("click",function(){
    const TodotextNodeValue=TodotextNode.value;
    //console.log(TodotextNodeValue);
    if(TodotextNodeValue){ 
        saveToDo(TodotextNodeValue,function(error){
            if(error){
                alert(error);
            }else{
                addTodoToDOM(TodotextNodeValue);
            }
        });
    }else{
        alert("Please enter a ToDo.");
    }
})
function saveToDo(todo, callback){
    fetch("/todo",{
        method:"POST",
        headers:{ "Content-type": "application/json"},
        body:JSON.stringify({ text:todo, createdBy : username}),
    })
    .then(function(response){
        if(response.status===200){
            callback();
        }else{
            callback("Something went wrong");
        }
    })
}

function addTodoToDOM(todo){
    const todolist=document.getElementsByClassName("task-list")[0];
    const todoitem=document.createElement("li");
    const todocheckbox=document.createElement("input");
    todocheckbox.setAttribute("type","checkbox");
    const tododeletebtn=document.createElement("BUTTON");
    const delbtnsign=document.createTextNode("✖");
    tododeletebtn.appendChild(delbtnsign);
    todoitem.setAttribute("id",todo);
    todoitem.innerText=todo;
    todoitem.appendChild(todocheckbox);
    todoitem.appendChild(tododeletebtn);
    todolist.appendChild(todoitem);
}
const buttonId="";

function btnClk(id){
    buttonId=id;
}


