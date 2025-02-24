const body = document.getElementsByClassName(body)[0]; // 보일 영역
const section = document.getElementsByClassName(section);
let page = 0; // 영역 포지션 초기값
const lastPage = body.length - 1; // 마지막 페이지

window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    console.log(e.deltaY)
    body.style.top = page * -100 + 'vh';
},{passive:false});

