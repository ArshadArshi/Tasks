import axios from 'axios'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import React, { useEffect, useState } from 'react'

function useDebounce(value,delay){
    const[values,setValues] = useState(value)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setValues(value)
        },delay)
        return ()=> clearTimeout(timer)
    },[value,delay])
    return values
}

const Products = () => {
    const [data,setData] = useState([])
    const[search,setSearch] = useState('')
    const debounceValue = useDebounce(search,500)
    const[filters,setFilters] = useState([])

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await axios(debounceValue ? `https://dummyjson.com/products/search?q=${debounceValue}` : "https://dummyjson.com/products?limit=4")
                setData(response.data.products)
                console.log(response.data.products)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[debounceValue])

    useEffect(()=>{
        if(debounceValue){
        const filtered = data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
        setFilters(filtered)
        }
        else{
            setFilters(data)
        }
    },[debounceValue,data])

    const handleDragEnd = (result) => {
        console.log(result);
        if(!result.destination) return;
        const dot = Array.from(data);
        const [newItem] = dot.splice(result.source.index, 1);
        dot.splice(result.destination.index, 0, newItem)
        setData(dot)
    }

  return (
    <>
    <input type="text" placeholder='search item' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <div >
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='li'>
                {(provided)=>(
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            filters.map(({id,thumbnail,title,price},index) => (
                                <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                    {(provided)=>(
                                             <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='product' key={id}>
                                             <img src={thumbnail} alt={title} />
                                             <div className="matter">
                                             <p>{title}</p>
                                             <p>$ {price} /-</p>
                                             {/* <p>rating : 🌟🌟🌟🌟🌟</p> */}
                                             </div>
                                             <button className='butn'>Add to cart</button>
                                         </li>
                                    )}
                                </Draggable>
                               
                            ))
                        }
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    </div>
    </>
  )
}
export default Products