import React, { useEffect, useState } from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';

const App6 = () => {
    const [items, setItems] = useState([]);

    const handleOnDragEnd = (result) => {
        console.log(result);
        if (!result.destination) return;
        const datas = Array.from(items);
        const [reorderedItem] = datas.splice(result.source.index, 1);
        datas.splice(result.destination.index, 0, reorderedItem);
        setItems(datas);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/carts");
                const data = await response.json();
                const itemsArray = data.carts.flatMap(cart => (
                    cart.products.map(product => ({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        thumbnail: product.thumbnail
                    }))
                ));
                setItems(itemsArray);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='li'>
                    {(provided) => (
                        <ul style={{listStyle:'none'}} className='products' {...provided.droppableProps} ref={provided.innerRef}>
                            {items.map(({ thumbnail, title, price }, index) => (
                                <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                                    {(provided) => (
                                        
                                            <li  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                               <div className="product-item" >
                                                <img src={thumbnail} alt={`thumbnail${index}`} />
                                                <p>{title}</p>
                                                <p>$ {price} /-</p>
                                            </div>
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default App6;