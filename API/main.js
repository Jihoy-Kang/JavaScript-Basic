let news = []
let navMenus = document.querySelectorAll(".menus button")
let searchButton = document.getElementById("search-button")
let searchInput = document.getElementById("search-input")



navMenus.forEach((menu)=>menu.addEventListener("click",event => getNewByTopic(event)))


const getLatestNews = async() =>{ // 비동기처리를 하기위해 함수를 async로만들어줘야함
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);
    //API주소불러오기 
    let header = new Headers({'x-api-key' : 'g2-YWJzKU_HS3x-gbNv5_gHRAvrpA0L03yXksB9Sy8c'})
    //API를 불러오기위한 키값을 입력
    let response = await fetch(url,{headers:header}); //데이터를 가지고올때까지 기다리기 위해 await함수를 사용
    //데이터 보내는방식 : ajax, fetch, http
    let data = await response.json();
    news = data.articles
    console.log(news)

    render()
};

const getNewByTopic = async (event)=>{
    let topic = event.target.textContent.toLowerCase();
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
    
    let header = new Headers({
        'x-api-key' : 'g2-YWJzKU_HS3x-gbNv5_gHRAvrpA0L03yXksB9Sy8c',
    })
    
    let response = await fetch(url,{headers:header});
    
    let data = await response.json();
    news = data.articles
    render()
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
    let url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10 Get News`)

    let header = new Headers({
        'x-api-key' : 'g2-YWJzKU_HS3x-gbNv5_gHRAvrpA0L03yXksB9Sy8c',
    })
    
    let response = await fetch(url,{headers:header});
    
    let data = await response.json();
    news = data.articles
    render()
}

searchButton.addEventListener("click",getNewsByKeyword)