let newsHtml="";
c=1;
console.log('hola')
//initialize news parameter
let source = 'techcrunch';
let apiKey = '5af1b1917bdb4477a22fb76402546025';
//grab news container
let space = document.getElementById('demo');
// create an ajax get request
const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5af1b1917bdb4477a22fb76402546025`, true);
xhr.open('GET', `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`, true);
//what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element) {
      
    //   let news = element["title"]
    //   let urrl=element["url"]
    //   let description=element["description"]
    //   console.log(news)
      newsHtml+=`${c}. ${element["title"]} <a href=${element["url"]} target=_blank>Read here </a><br><br>`
      c+=1;
    });
    space.innerHTML = newsHtml;
  }
  else {
    console.log("error")
  }
}
xhr.send()
