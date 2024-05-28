import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const App25 = () => {
    const[data,setData] = useState([])
    const[page,setPage] = useState([])
    
    async function fetchData() {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(response.data)
            setPage(response.data.slice(0,10))
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const pageHandler = (pageNumber) => {
        setPage(data.slice((pageNumber*10)-10,pageNumber*10))
    }
  return (
    <div>
        {
            data.length >=1 ? 
            <div>
                    {page.map(post=> <div>{post.title}</div> )}
                    <br />
                    <Pagination data={data} pageHandler={pageHandler} />
                 </div>
                 :
                 <p>Data not loaded</p>
        }
    </div>
  )
}

export default App25