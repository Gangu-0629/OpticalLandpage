import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
export default function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg mynavbar" >
        <div className="navhead">
          <h1>OPTICAL</h1>
          <button onClick={()=>{console.log("Clicked")}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse navlinks" id="navbarNav">
        <ul class="navbar-nav">
          <Link className='navbarlink' to={"/"}>Eyeglasses</Link>
          <Link className='navbarlink' to={"/sunglasses"}>Sunglasses</Link>
          <Link className='navbarlink' to="https://www.amazon.in/s?k=sunglasses&crid=2HZCLSGAZ70OU&sprefix=sunglasse%2Caps%2C419&ref=nb_sb_noss_2">Visit in Amazon</Link>
          </ul>
        </div>
      </nav>

    </>
  )
}
