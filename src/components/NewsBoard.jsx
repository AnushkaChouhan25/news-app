import Newsitems from "./Newsitems";
import { useState, useEffect } from "react";

const NewsBoard = ({}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`
    
      fetch(url).then(response => response.json()).then(data => setArticles(data.articles)) 
    
    },[])
    
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger text-dark">News</span></h2>
      {articles.map((news, idx)=>{
        return <Newsitems key={idx} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></Newsitems>
      })}
    </div>
  )
}

export default NewsBoard
