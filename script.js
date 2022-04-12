let id = 1;
let input = document.getElementById(`todoname`);

function create() {
    let todolist = document.getElementById(`todolist`);
    let newtask;
    let trashbin;
    let todotask;

    newtask = document.createElement(`div`);

    newtask.className = `div`;
    newtask.innerHTML = input.value;
    newtask.id = id;

    trashbin = document.createElement(`button`);
    trashbin.className = `material-icons`;
    trashbin.innerText = `delete`
    trashbin.id = newtask.id;
    trashbin.addEventListener(`click`, remove(trashbin.id));

    todotask = document.createElement(`div`);
    todotask.className = `todotask`;
    todotask.id = newtask.id;

    input.value = ``;

    todotask.appendChild(newtask)
    todotask.appendChild(trashbin);
    todolist.appendChild(todotask);
    todolist.scrollTo(0, todolist.scrollHeight);

    id++
}

function remove(id) {
    return function () {
        let remove = document.getElementById(id);
        remove.classList.add(`removeanimation`);
        setTimeout(function(){
            remove.remove();
        }, 2000)
    }
}

input.addEventListener(`keyup`, function (event) {
    if (event.keyCode === 13) {
        create();
    }
});