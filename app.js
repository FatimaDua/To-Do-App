// targetting our list of items; add items
var list = document.getElementById("list");

// making a function which will be called when a button of add will be clicked. 
function addToDo(){

    // targetting our input data through id "to-do-item"
    var addedItem = document.getElementById("todo-item");

    // Now we want to add items that is inserted by the user. 
// and for that we need to add list item, namely, li, in our unorderd list,ul, 
//adding li in ul by DOM ; createElement. 
    var li = document.createElement('li');

// li element is created but with no text in it. 
// to do add in it. 
    //create a text of inserted value by user. 
    var liText= document.createTextNode(addedItem.value);
    //now add it in the li.
    li.appendChild(liText);

//creating a delete button using javascript. 
    var delBtn = document.createElement('button');
    var delText= document.createTextNode("-");

//if we want to set any attribute to delete button element then
    delBtn.setAttribute("class","del-btn");

//adding an onclick atribute in del button
    delBtn.setAttribute("onclick","delItem(this)");  // we are passing the delete button clicked by user. 

    delBtn.appendChild(delText);

//adding an edit button in li 
var editBtn = document.createElement('button');
var editText = document.createTextNode("Edit");
editBtn.appendChild(editText);

editBtn.setAttribute("class","editBtn");
//setting onclick attribute in edit deleteButton
editBtn.setAttribute('onclick','editItem(this)');

//add buttons in the list items. 
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    addedItem.value="";
    console.log(li);
}

function delItem(deleteButton){
    deleteButton.parentNode.remove(); //parent node of delete button is the list item , remove is the method. 
}

function reset(){
    //all the items added to ul should be removed from
    //or the class list should be set to empty.
    list.innerHTML ="";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value ", val)
    e.parentNode.firstChild.nodeValue = editValue; 
}