document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container')
    const loadMoreBtn = document.getElementById('load-more-btn')
    let startIndex = 0
    const batchSize = 10

// Funzione per fetchare
function callFetch(url) {
  return fetch(url)
    .then(response => response.json())
}

// Funzione per fetchare i dettagli dell'API globale
function getNews(ids) {
  const promises = ids.slice(startIndex, startIndex + batchSize)
    .map(id => callFetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
     
  Promise.all(promises)
    .then(news => {
     getNewsOnScreen(news)})  
    .catch(error => console.error('Error fetching news:', error))
}
  
// Funzione che renderizza le notizie
function getNewsOnScreen(Array) {
  Array.forEach(item => {
    if (item.url) {
    const newsItem = document.createElement('div')
    newsItem.id="news-item";
    newsItem.innerHTML = `<h3 id="news-title">${item.title}</h3>
    <a id="anchor" href="${item.url}" target="_blank" rel=”noopener noreferrer”>Click here to read</a>
    <p id="news-date">Date: ${new Date(item.time * 1000).toLocaleString()}</p>`
    newsContainer.appendChild(newsItem)
    }})
}

// Richiamo la function per fetchare l'API globale
callFetch('https://hacker-news.firebaseio.com/v0/newstories.json')
  .then(newsIds => {

// Richiamo la function che carica le prime 10 notizie
  getNews(newsIds)
    startIndex += batchSize

// Aggiunta dell'handler per il pulsante "Load more"
  loadMoreBtn.addEventListener('click', () => {
    getNews(newsIds)
    startIndex += batchSize
    });
  })
  .catch(error => console.error('Error fetching news IDs:', error))
})