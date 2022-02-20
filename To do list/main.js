//유저가 값을 입력
// +을 클릭하면 할 일 추가
// delete누르면 할 일 삭제
// check 버튼 누르면 할 일 끝나면서 윗줄 생김
    // 1.check버튼 누르는 순간 isCompleterk True로 변경
    // 2.true로 바뀌면 끝난걸로 간주하고 윗줄
    // 3.false면 안끝난걸로 간주호 그대로 냅두기
//진행중  끝남탭을 누르면, 언더바가 이동한다
// 끝남탭은 끝난것만, 진행중인건 진행중인 아이템만 나온다.
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("under-line");
let taskList = []
let mod ='all'
let filterList = []

for(let i = 1;i<tabs.length;i++){
    tabs[i].addEventListener("click",function(event){filter(event)})
}

addButton.addEventListener("click", addTask); 
taskInput.addEventListener("focus", function(){taskInput.value = ""})
function enterkey() {
	if (window.event.keyCode == 13) {
    	addTask()
        taskInput.value =" "
    }
}

tabs.forEach((menu) => menu.addEventListener("click", (e) => horizontalIndicator(e)))

function horizontalIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft + "px";
    underLine.style.width = e.currentTarget.offsetWidth + "px";
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function addTask(){
    let task = {
        id : randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)
    filterList.push(task)
    render();
}

function render(){
    let list = []
    if(mod == "all"){
        list = taskList
    }else if(mod == "doing" || mod == "done"){
        list = filterList
    }
    let resultHTML = ' ';
    for(let i = 0 ; i<list.length;i++){
        if (list[i].isComplete == true){
            resultHTML += `<div class="task">
            <div class = "task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;

        } else{
            resultHTML += 
            `<div class="task">
                <div>${list[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${list[i].id}')">Check</button>
                    <button onclick="deleteTask('${list[i].id}')">Delete</button>
                </div>
            </div>`;
        }

        
    }

    document.getElementById("task-board").innerHTML = resultHTML
}

function toggleComplete(id){
    for(let i=0;i<taskList.length ; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    for(let j=0;j<filterList.length ; j++){
        if(filterList[j].id == id){
            filterList.splice(j,1)
            break;
        }
    }
    render();
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substring(2, 9);
}

function deleteTask(id){
    for(let i=0;i<taskList.length ; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    for(let j=0;j<filterList.length ; j++){
        if(filterList[j].id == id){
            filterList.splice(j,1)
            break;
        }
    }
    render();
}

function filter(event){
    mod = event.target.id
    filterList = []
    if(mod == "all"){
        render()
    }else if(mod == 'doing'){
        for(let i = 0; i < taskList.length ; i++){
            if(taskList[i].isComplete == false){
                filterList.push(taskList[i])
            }
        }
        render()
    }else if(mod == 'done'){
        for(let i = 0; i < taskList.length ; i++){
            if(taskList[i].isComplete == true){
                filterList.push(taskList[i])
            }
        }
        render()
    }
}


