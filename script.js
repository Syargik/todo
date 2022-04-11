let input = document.getElementById(`todoname`);
let todolist = document.getElementById(`todolist`);
let newtask;
let trashbin;
let todotask;

function create() {

    newtask = document.createElement(`div`);

    newtask.className = `div`;
    newtask.innerHTML = input.value;

    trashbin = document.createElement(`button`);
    trashbin.className = `trashbin`;
    trashbin.onclick = deletetask;

    todotask = document.createElement(`div`);
    todotask.className = `todotask`;

    newtask.id = input.value;
    trashbin.id = newtask.id;
    todotask.id = newtask.id;

    input.value = ``;

    todotask.appendChild(newtask)
    todotask.appendChild(trashbin);
    todolist.appendChild(todotask);
    todolist.scrollTo(0, todolist.scrollHeight);
}

input.addEventListener(`keyup`, function (event) {
    if (event.keyCode === 13) {
        create();
    }
});

function deletetask() {
    let remove = document.getElementById(`${todotask.id}`);
    console.log(remove)
}