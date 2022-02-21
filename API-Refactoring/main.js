//리펙토링 계획
//1. 각 함수에서 필요한 url을 만든다
//2. API호출함수를 부른다.


let news = []
let url =""
let page = 1
let total_page = 0
let navMenus = document.querySelectorAll(".menus button")
let searchButton = document.getElementById("search-button")
let searchInput = document.getElementById("search-input")



navMenus.forEach((menu)=>menu.addEventListener("click",event => getNewByTopic(event)))

const getNews = async() => {
    try{
        let header = new Headers({'x-api-key' : 'g2-YWJzKU_HS3x-gbNv5_gHRAvrpA0L03yXksB9Sy8c'})
        //API를 불러오기위한 키값을 입력
        url.searchParams.set('page', page) //&page=
        let response = await fetch(url,{headers:header}); //데이터를 가지고올때까지 기다리기 위해 await함수를 사용
        //데이터 보내는방식 : ajax, fetch, http
        let data = await response.json();
        if(response.status == 200){
            if(data.total_hits == 0){
                throw new Error("검색된 결과값이 없습니다.")
            }
            news = data.articles
            total_page = data.total_pages;
            page = data.page;
            console.log(news)
            render()
            pageNation()
        } else{
            throw new Error(data.message)
        }
    }catch(error){
        console.log("에러는", error.message)
        errorRender(error.message)
    }
}

const errorRender = (message) =>{
    let errorHTML = `<div class="alert alert-danger text-center" role="alert">
    ${message}
    </div>`
    document.getElementById("news-board").innerHTML = errorHTML
}

const getLatestNews = async() =>{ // 비동기처리를 하기위해 함수를 async로만들어줘야함
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);
    //API주소불러오기 
    getNews()
};

const getNewByTopic = async (event)=>{
    let topic = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
    
    getNews()
}

const render = () => {
    let newsHTML = ''
    newsHTML = news.map(item=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-image" src ="${item.media}">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>
                ${item.rights} * ${item.published_date}
            </div>
        </div>
    </div>`
    }).join('')

    document.getElementById('news-board').innerHTML = newsHTML
}
getLatestNews()

const getNewsByKeyword = async () => {
    let keyword = searchInput.value
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10 Get News`)

    getNews()
}

searchButton.addEventListener("click",getNewsByKeyword)

const pageNation= () =>{
    let pageNationHTML = ``
    let pageGroup = Math.ceil(page/5)
    let last = pageGroup*5
    let first = last - 4

    pageNationHTML = `<li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${page-1})">
      <span aria-hidden="true">&lt;</span>
    </a>
  </li>`
    for(let i = first ; i<=last;i++){
        pageNationHTML += `<li class="page-item ${page==i?"active":""}"><a class="page-link" onclick="moveToPage(${i})" href="#">${i}</a></li>`
    }

    pageNationHTML += ` <li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${page+1})">
      <span aria-hidden="true">&gt;</span>
    </a>
  </li>`
    document.querySelector(".pagination").innerHTML = pageNationHTML
}
//total_page
//page
// page group
//last page
//first-last page print

const moveToPage = (pageNum) => {
    page = pageNum
    console.log(page)
    getNews()
}

//1. 이동하고시싶은 페이지
