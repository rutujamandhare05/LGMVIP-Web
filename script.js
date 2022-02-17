// getting all required elements
const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //Getting user entered value
    if(userData.trim() != 0){//if user values aren't only spaces
        addBtn.classList.add("active"); //active add button
    }
    else{
        addBtn.classList.remove("active"); //unactive add button
    }
}

showTasks(); //calling showtasks function

// if user click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){ // if localstorage is null
        listArr = []; //creating blank array 
    }
    else{
        listArr = JSON.parse(getLocalStorage); //transforming json string to json object
    }
    listArr.push(userData);// pushing or adding data
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transforming json object to json string
    showTasks(); // calling showTasks functions
    //addBtn.classList.remove("active");
}
 //function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){ // if localstorage is null
        listArr = []; //creating blank array 
    }
    else{
        listArr = JSON.parse(getLocalStorage); //transforming json string to json object
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag  += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fa fas-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // adding new li to ul
    inputBox.value = "";//once task added leave the input field blank
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); // delete or remove the particular indexed li
    //after remove the li again update the local storage
    localStorage.setItem("New Todo",JSON.stringify(listArr));//transforming json object to json string
    showTasks(); // calling showTasks functions
}
