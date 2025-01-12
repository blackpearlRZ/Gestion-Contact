import React from 'react'
import { Link } from 'react-router-dom'
export default function ConctactInfo() {
    function handleback(){
        setClicked('false')
    }
  return (
    <div>
        <h1>More Info</h1>
        <div>
            <ul>
                <li>Phone : </li>
            </ul>
        </div>
        <Link to='/contact/list'><button className='back_btn' onClick={() => handleback()}>Back to Contact</button></Link>
    </div>
  )
}
