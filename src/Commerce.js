import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { FaShoppingCart } from 'react-icons/fa'

function useDebounce(value, delay) {
    const [debval, setDebVal] = useState(value)
    useEffect(() => {
        const timerId = setInterval(() => {
            setDebVal(value)
        }, delay)
        return () => {
            clearInterval(timerId, 500)
        }
    }, [delay, value])
    return debval
}

const Commerce = () => {
    const [data, setData] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [show, setShow] = useState(false)
    const [cart, setCart] = useState({})
    const [search, setSearch] = useState('')
    const debTerm = useDebounce(search, 500)
    const [fil, setFil] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(debTerm ? `https://dummyjson.com/products/search?q=${debTerm}` : "https://dummyjson.com/products?limit=18")
                setData(response.data.products)
                console.log((response.data.products));
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [debTerm])

    useEffect(() => {
        if (debTerm) {
            const filtered = data.filter(item => item.title.toLowerCase().includes(debTerm.toLowerCase()))
            console.log('debterm', debTerm);
            setFil(filtered)
        }
        else {
            setFil(data)
        }
    }, [debTerm, data])

    const handleAdd = (id, price) => {
        setCart(prevCart => ({
            ...prevCart, [id]: 1
        }))
        setCartCount(prevCount => prevCount + 1)
        setShow(true)
        setTotal(currTot => currTot + price)
    }

    const handleInc = (id, price) => {
        setCart(prevCart => ({
            ...prevCart, [id]: (prevCart[id] || 0) + 1
        }))
        setCartCount(prevCount => prevCount + 1)
        setTotal(currTot => currTot + price)
    }

    const handleDec = (id, price) => {
        if (cart[id] > 0) {
            setCart(prevCart => ({
                ...prevCart, [id]: (prevCart[id] - 1)
            }))
        }
        setCartCount(prevCount => prevCount - 1)
        setTotal(currTot => currTot - price)
    }

    const handleDrag = result => {
        console.log(result);
        if (!result.destination) return;
        const dot = Array.from(data)
        const [reorder] = dot.splice(result.source.index, 1)
        dot.splice(result.destination.index, 0, reorder)
        setData(dot)
    }

    return (
        < >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid" style={{ marginLeft: '120px' }}>
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#van">About</a>
                            </li>
                            <li>
                                <FaShoppingCart style={{ position: 'relative', fontSize: '25px', cursor: 'pointer', marginLeft: '800px', marginTop: '6px', color: 'white' }} />
                                <span className='coun'><div className='count'>{cartCount}</div></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <input style={{ marginLeft: '600px', marginTop: '10px' }} type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

            <div id='car' style={{ margin: '10px', marginLeft: '40px', width: '80rem' }} class="card">
                <div class="card-header">
                    Featured
                </div>
                <div style={{ marginLeft: '500px' }}>TOTAL : $ {total} /-</div>
                <div class="card-body d-flex justify-content-center align-items-center">
                    <p class='h4'>Shoping Deals are giving the offers to have a good relation with customers</p>
                    <img style={{ width: '1100px', height: '400px' }} src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </div>
            <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId='li'>
                    {(provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            <div id='van' className='a'>
                                {
                                    fil.map(({ id, price, title, thumbnail }, index) => (
                                        <Draggable draggableId={index.toString()} key={index.toString()} index={index}>
                                            {(provided) => (
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className='a-item' key={id}>
                                                    <img src={thumbnail} alt={title} />
                                                    <p>{title}</p>
                                                    <h5>$ {price} /-</h5>
                                                    {
                                                        cart[id] ? (
                                                            <div>
                                                                <button class='btn-warning' onClick={() => handleInc(id, price)}>+</button>
                                                                <button class='btn-warning' onClick={() => handleDec(id, price)}>-</button>
                                                            </div>
                                                        ) : (
                                                            <button class='btn-warning' onClick={() => handleAdd(id, price)}>Add To Cart</button>
                                                        )
                                                    }
                                                </li>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <div className='footer'>
                <div className="mat">
                    <div>
                        <p className='heading'>Sell Online</p>
                        <p>how to register a seller</p>
                        <p>How to sell on Shopping</p>
                        <p>Free and pricing</p>
                        <p>Offers for sellers</p>
                        <p>Launch your brand</p>
                    </div>
                    <div>
                        <p className='heading'>For existing sellers</p>
                        <p>Fulfillment by Amazon</p>
                        <p>Amazon Ads</p>
                        <p>Sell globally</p>
                        <p>Programs</p>
                        <p>Grow your business</p>
                    </div>
                    <div>
                        <p className='heading'>Tools</p>
                        <p>Amazon Seller Central</p>
                        <p>Amazon Seller App</p>
                        <p>Service Provider Network</p>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <p className='heading'>Resources</p>
                        <p>Seller blog</p>
                        <p>GST guide</p>
                        <p>Seller University</p>
                        <p>Success stories</p>
                        <p>Seller FAQ</p>
                    </div>
                    <div>
                        <p className='heading'>Reach us</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>You Tube</p>
                        <p>LinkedIn</p>
                        <p>help</p>
                    </div>
                </div>
                <hr style={{ color: '#AAB7B8', width: '1000px', marginLeft: '170px' }} />
                <div className='las'><p>
                    Popular Products to Sell Online
                    Sell Books Online | Sell Art Online | Sell Handmade Products Online | Sell Wholesale Products Online | Sell Clothes Online | Sell Grocery Online | Sell Home Products Online | Sell Beauty Products Online | Sell Watches Online | Sell Kitchenware Products Online | Sell Tea Online | Sell Furniture Online | Sell Headphones Online | Sell Toys Online | Sell Shoes Online
                </p>
                    <p>
                        Blogs for Small and Medium Businesses
                        Accounting Basics for Online Businesses | How to Source Vendors for your Ecommerce Business | Book Keeping for Small Businesses | Invoicing Software Solutions for Small Businesses | Financial Planning Tips for SMBs | Equity and Debt Financing for SMBs | Funding Options for Online Businesses | How to Build Teams for Online Businesses | 10 Things to know before opening an Online Store | How to Choose an E-commerce Marketplace | Working Capital Management for SMBs | E-commerce Procurement Platforms in India | Payment Gateway Integration Best Practices
                    </p>
                    <p>
                        Blogs for Online Sellers
                        6 Budget Friendly Business Ideas to Start your Online Business | Starting an Online Business in India - Things you may Keep in Mind | What is Ecommerce? | How to Start your E-commerce Business | Benefits of Starting an E-commerce Business | Amazon Online Business Ideas | Empowering Entrepreneurship: Business Ideas for Women | How to start an E-commerce Business in India with Minimal Investments! | Building Side Business Ideas to Earn Money | How to start your own Business | 8 Digital Business Ideas in 2023
                    </p></div>
                <hr style={{ color: '#AAB7B8' }} />
                <div className='last'>
                <a class="nav-link active" aria-current="page" href="#"><img  src="https://m.media-amazon.com/images/G/01/sell/navigation/logos/amazon-in-half-logo-REV.svg" alt="" />
                    </a><p>Sitemap</p>
                    <p>Confidentiality policy</p>
                    <p>Terms of use</p>
                    <p>Cookies</p>
                    <small style={{ marginLeft: '80px', marginBottom: '13px' }}>© 2024 Amazon.com, Inc. or its affiliates. All rights reserved</small>
                </div>
            </div>
        </>
    )
}

export default Commerce