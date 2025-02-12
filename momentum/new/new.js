// 시간 설정
const clockElem = document.querySelector('.clock');
const getClock = () => {
    const today = new Date(); 
    const hh = String(today.getHours()).padStart(2,"0");
    const mm = String(today.getMinutes()).padStart(2,"0");
    const ss = String(today.getSeconds()).padStart(2,"0");
    clockElem.textContent = `${hh}:${mm}:${ss}`;
}
getClock();
setInterval(getClock, 1000);

// 할 일 추가
function addTodo(event) {
    event.preventDefault(); 
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement('li'); 
        li.innerHTML = `${todoText} <button onclick="removeTodo(this)">삭제</button>`; // 할 일과 삭제 버튼 추가
        document.getElementById('todoList').appendChild(li); 
        todoInput.value = ''; 
    }
}

// 할 일 삭제 
function removeTodo(button) {
    button.parentElement.remove(); 
}

