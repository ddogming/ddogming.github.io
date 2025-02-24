const setDateSelect = (id,options)=>{
    const obj = document.querySelector('#'+id);
    options.forEach((value) => {
      const elem = document.createElement("option");
      elem.value = value;
      elem.textContent = value;
      obj.appendChild(elem);
    });
  }
  const addSelectOption = ()=>{
    //start, target select에 option을 추가
    //year : 1990 ~ 2050
    const years = Array.from( {length:(2050-1990)+1}, (_,i)=>{
      return 1990+i;
    });
    setDateSelect("start-year",years);
    setDateSelect("target-year",years);
     //month : 1~12
    const months = Array.from( {length:12}, (v,i)=>{
      return i+1;
    });
    setDateSelect("start-month",months);
    setDateSelect("target-month",months);
    //day : 1~31
    const days = Array.from( {length:31}, (_,i)=>{
      return i+1;
    });
    setDateSelect("start-day",days);
    setDateSelect("target-day",days);
  }
  const setSelectValue = (id,value)=> {
    const elem = document.querySelector('#'+id);
    elem.value = value;
  }
  const setTodayAsDefault = ()=> {
    //오늘 날짜 정보
    const today = new Date();
    const year = today.getFullYear(); //년
    const month = today.getMonth()+1; //월
    const day = today.getDate();      //일
    setSelectValue("start-year", year);
    setSelectValue("start-month", month);
    setSelectValue("start-day", day);
    setSelectValue("target-year", year);
    setSelectValue("target-month", month);
    setSelectValue("target-day", day);
  }
  const getCalcTime = (id)=>{
    // const elem = document.querySelector("#"+id);
    // return elem.value;
    return document.querySelector('#'+id).value;
  }
  const calculateTime = ()=>{
    // console.log("버튼 클릭 확인");
    //시작시간 알아오기
    const startDate = new Date( getCalcTime("start-year"),
                                getCalcTime("start-month")-1,
                                getCalcTime("start-day"),
                              );  
    //목표시간 알아오기
    const targetDate = new Date( getCalcTime("target-year"),
                                getCalcTime("target-month")-1,
                                getCalcTime("target-day"),
                              );
    console.log( startDate );  
    console.log( targetDate );  
    //남은시간 계산하기
    const today = new Date(); //오늘날짜
    const reTime = targetDate - today;
    //남은 날짜
    const reDays = Math.ceil(reTime/(1000*60*60*24));
    const reHour = Math.floor((reTime%(1000*60*60*24))/(1000*60*60));
    const reMinute = Math.floor((reTime%(1000*60*60))/(1000*60));
    const reSecond = Math.floor((reTime%(1000*60))/(1000));
    document.querySelector('.n-days').textContent = `남은날짜 : ${reDays}일`;
    document.querySelector('.n-times').textContent = `남은시간 : ${reDays}일 ${reHour}시 ${reMinute}분 ${reSecond}초`;
    document.querySelector('.time').textContent = `현재날짜: ${today.toLocaleString()}`;
  }
  const init = ()=>{
    //처음 실행되는 함수
    // 1. select에 Option을 추가하기
    addSelectOption();
    // 2. option 에 현재 날짜로 보여지도록
    // 제일 하단에 현재 시간 표시
    setTodayAsDefault(); 
    // 3. 남은 시간 계산
    // 언제 실행이 되어야 할까요? 결과보기 버튼을 클릭했을 때
    const resultElem = document.querySelector("button");
    resultElem.addEventListener("click",calculateTime);
    // calculateTime();
    setInterval( calculateTime , 1000);
  }
  window.onload = init;