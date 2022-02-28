import React,{useState, useEffect} from 'react'
import axios from 'axios';


function Actualites() {

  const [actualities, setActualities] = useState([])

    useEffect(() => 
    axios
    .get("https://newsapi.org/v2/everything?q=tesla&from=2022-01-28&sortBy=publishedAt&apiKey=e277a62f4af14e66bacdfca1f186722e")
    .then((res) => setActualities(res.data.articles))
    .catch((err) => console.log(err))
    , [])
    
    
  console.log(actualities)

return (
  <div>
    {actualities.map(actuality => 
      <div>
        <p>Author: {actuality.author}</p>
        <p>Content: {actuality.content}</p>
        <p>Description: {actuality.description}</p>
      </div>)}
  </div>
  )
}

export default Actualites