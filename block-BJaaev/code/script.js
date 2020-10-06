let userInput = document.querySelector('#userInput');
let ul = document.querySelector('.list-group');


let allTodo = JSON.parse(localStorage.getItem('todos')) || [];
function handler(event){
let value = event.target.value;
   if(event.keyCode === 13 && value !== ""){
    let todo = {
        name: value,
        isDone: false
    };
    allTodo.push(todo);
    event.target.value = ""
    ui();
}

localStorage.setItem('todos', JSON.stringify(allTodo))

}
function deleteHandler(event){
    let ind = event.target.dataset.index;
    console.log(ind)
    allTodo.splice(ind, 1);
    localStorage.setItem('todos', JSON.stringify(allTodo))
    ui();
}
function handlerDone(event){
    let id = event.target.dataset.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    ui();
 }
function FilterHandler(event){
 if(event.target.id == 'All'){
    ui(allTodo)
}
if(event.target.id == 'Active'){
    ui(allTodo.filter(task => task.isDone == false));
}
if(event.target.id == 'Completed'){
    ui(allTodo.filter(task => task.isDone == true));
}
if(event.target.id == 'ClearCompleted'){
    allTodo =  allTodo.filter((todo) => todo.isDone == false);
    console.log(allTodo)
    ui(allTodo);
    localStorage.setItem('todos', JSON.stringify(allTodo));
  
}
 }



 function ui(el = allTodo){
        ul.innerHTML = '';
       el.forEach((item, index) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
        li.style.border = 'none'
        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute('id', 'circle')
        input.checked = item.isDone;
        input.setAttribute('data-id', index);
        input.addEventListener('input', handlerDone);
        let p = document.createElement('p');
        p.innerText = item.name;
        let span = document.createElement('span');
        span.setAttribute('class', 'badge badge-primary badge-pill');
        span.setAttribute('data-index', index)
        span.innerText = 'X';
        span.addEventListener('click', deleteHandler)
        li.append(input, p, span);
        ul.appendChild(li);
    });
        let footer = document.createElement('li');
        footer.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
        footer.setAttribute('id', 'footer')
        footer.innerHTML = `<span id ='All'>All</span> 
        <span id = 'Active'>Active</span> 
        <span id = 'Completed'>Completed</span>
        <span id = 'ClearCompleted'>Clear Completed</span>`
        ul.appendChild(footer);
        footer.addEventListener('click', FilterHandler);
  }
       userInput.addEventListener("keyup", handler);
ui();
