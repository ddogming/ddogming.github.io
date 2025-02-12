const loginForm = document.querySelector("#loginForm");
const inputElem = document.querySelector('input');
const pElem = document.querySelector("p");
const LOGIN_KEY = "loginname";
const outElem = document.querySelector(".logout");

const saveLoginName = (strInput) => {
    localStorage.setItem(LOGIN_KEY, strInput);  
}

const loadLoginName = () => {
    return localStorage.getItem(LOGIN_KEY);  
}

const printLoginName = (strName) => {
    const currentHour = new Date().getHours(); 
    let greeting = ""; 
    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Good morning";  // 오전
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";  // 오후
    } else if (currentHour >= 18 && currentHour < 24) {
        greeting = "Good evening";  // 저녁
    } else {
        greeting = "Good night";  // 심야 (00:00 - 05:59)
    }
    
    pElem.textContent = `${greeting}, ${strName}.`;
    pElem.classList.remove("hidden");  
    outElem.classList.remove("hidden");  
    loginForm.classList.add("hidden");  
}

const handlerSubmit = (event) => {
    event.preventDefault();  
    const loginName = inputElem.value.trim();  
    
    if (loginName) {
        saveLoginName(loginName);  
        printLoginName(loginName);  
    } else {
        alert("Please enter your name!");  
    }
}

const init = () => {
    let loginName = loadLoginName(); 
    
    if (loginName) {
        printLoginName(loginName);  
    } else {
        loginForm.addEventListener("submit", handlerSubmit);  
    }
    outElem.addEventListener("click", () => {
        localStorage.removeItem(LOGIN_KEY);  
        pElem.classList.add("hidden");  
        outElem.classList.add("hidden");  
        loginForm.classList.remove("hidden");  
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = '';  
    });
}

window.onload = init;
