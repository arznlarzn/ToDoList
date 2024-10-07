
// this is declaring the variable connected to the button ADD
var addButton = document.getElementById('add');
//and then .addEventListener to a variable will let us declare what to look out for being interacted with.
addButton.addEventListener("click", addItem);
var ToDoList = document.getElementById("itemsList");

//Here I have built the addItem function that essential builds the to do list into list items, and then displays them in the Items section.
// I have added functionality in the form of 2 if statements. It is checking if the text already exists on the list. If it does, it shows an alert and turns alreadyOn to true so that the following if statement will not run.
//The second if statement is the one that adds the item to the list.

function addItem() {
    var newText = document.getElementById("itemToDo").value;
    var listcheck = document.getElementsByTagName("li");
    var alreadyOn = false;
    for (var i = 0; i < listcheck.length; i++) {
        if (listcheck[i].textContent == newText) {
            alert("Your list already has this item to do!");
            alreadyOn = true;
            break;
        }
    }
    if (!alreadyOn) {
        var newListItem = document.createElement('li');
        newListItem.textContent = newText;
        //newListItem.textContent is turning the new List Item's content into the 'newText' which is the user entered characters in the textbox itemToDo.
        ToDoList.appendChild(newListItem);
    }
}



//declare deleteButton var
var deleteButton = document.getElementById('delete');
//adding listener for deleteButton being clicked
deleteButton.addEventListener("click", deleteItem);



//A function i built that will check the list items for anything that matches what is currently in the text box, and if so, delete it.
//I could not get this to work for awhile because I forgot to add the deleteButton variable and an event listener.    B-]
function deleteItem() {
    var itemToDelete = document.getElementById("itemToDo").value;
    var itemList = ToDoList.getElementsByTagName("li");
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].textContent===itemToDelete) {
            var found = true;
            ToDoList.removeChild(itemList[i]);
            break;
        }
    }
    if (!found) {
        alert("This item is not on the list to delete! Chill dawg.");
    }
}

var completeButton = document.getElementById('complete');
completeButton.addEventListener('click', completeItem);

function completeItem() {
    var newText = document.getElementById('itemToDo').value;
    var items = ToDoList.getElementsByTagName("li");
    var CompleteList = document.getElementById('completedList');
    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent === newText) {
            var found = true;
            var newCompleteItem = document.createElement('li');
            newCompleteItem.textContent = newText;
            CompleteList.appendChild(newCompleteItem);
            deleteItem();
            break;
        }
    }
    if (!found) {
        alert("It looks like your text isn't on the list... Did you even do it, bro?");
    }
}

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function removeItem() {
    var itemToRemove = document.getElementById('itemToDo').value;
    var CompleteList = completedList.getElementsByTagName("li");
    for (var i = 0; i < CompleteList.length; i++) {
        if (CompleteList[i].textContent==itemToRemove) {
            var found = true;
            completedList.removeChild(CompleteList[i]);
            break;
        }
    }
}

