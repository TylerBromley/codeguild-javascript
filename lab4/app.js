let todo = document.getElementById("openItems");
let complete = document.getElementById("completedItems");
let addButton = document.getElementById("enter");

addButton.addEventListener("click", function(e) {
    p = document.createElement('p');
    let delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.setAttribute("onClick", "Delete(this)");
    let completeButton = document.createElement('button');
    completeButton.innerText = 'Mark Completed';
    completeButton.setAttribute("onClick", "MarkCompleted(this)");
    let div = document.createElement('div');
    div.setAttribute("class", 'todoItem');
    p.innerText = "click here to add an item";
    p.style.color = "gray";
    p.addEventListener('click', pClickCallback);
    div.append(p);
    div.append(completeButton);
    div.append(delButton);
    todo.append(div);
});
function Delete(button) {
    var parent = button.parentNode;
    var grand_father = parent.parentNode;
    grand_father.removeChild(parent);
}
function MarkCompleted(button) {
    var parent = button.parentNode;
    complete.appendChild(parent);
    parent.setAttribute("contentEditable", "false");
    parent.firstChild.style.textDecoration = "line-through";
    parent.removeChild(button);
}
function pClickCallback(event) {
    p.setAttribute("contentEditable", "true");
    p.style.color = "black";
    button.value = "save";
}


