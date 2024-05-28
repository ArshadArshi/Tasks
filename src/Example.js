// import React, { Component } from 'react'
// import Dummy from './Dummy'

// export default class Example extends Component {
//     state= {
//         name: 'Arshad the Developer'
//     }
//   render() {
//     return (
//         <center>
//       <div><Dummy name={this.state.name}/></div>
//       </center>
//     )
//   }
// }
import React, { useState } from 'react'
import audio from './jaat.mp3'
import video from './intro.mp4'
import arshi from './arshi.jpg'

const Example = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <center>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='username' value={username} onChange={handleChange} /> <br />
                    <input type="password" placeholder='password' value={password} onChange={handleChange} /> <br />
                    <input type="submit" name='submit' />
                </form>
            </div>
            <div className="data" >
                <audio controls>
                    <source src={audio} type='audio/mp3' />
                </audio>
                <video height='250' width='320' controls>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <img src={arshi} width='320' height='300' alt='arshi' />
        </center>
    )
}

export default Example
