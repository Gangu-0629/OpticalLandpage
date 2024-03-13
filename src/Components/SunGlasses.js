import React, { useEffect, useState } from 'react'
import Sun1 from '../Assets/SunGlasses/Sun1.png'
import Sun2 from '../Assets/SunGlasses/Sun2.png';
import Sun3 from '../Assets/SunGlasses/Sun3.png';
import Sun4 from '../Assets/SunGlasses/Sun4.png';

export default function SunGlasses() {
  const [present,setPresent]=useState(1);
  const pics=[Sun1,Sun2,Sun3,Sun4]
  const spects=[
    {
      id:1,
      title:"Bnus",
      description:"Bnus italy made classic sunglasses corning real glass lens w. polarized option | These polarized sunglasses for men are 100% polarized for protection from glare and UV rays, making them perfect for outdoor activities such as cycling or sports.",
      price:2489
    },
    {
      id:2,
      title:"Tom Ford",
      description:"Tom Ford HUDSON-02 FT 0997-H Black/Green 55/18/145 men Sunglasses, Black/Green, 55/18/145 || The Tom Ford collection features lenses that offer a 400 Nano-meter, 100% UV Protection that protect your eyes from the sun’s harmful UV rays, reduce glare and enhance visual clarity.",
      price:42000
    },
    {
      id:3,
      title:"VINCENT CHASE ",
      description:"VINCENT CHASE EYEWEAR Unisex Adult Square Polarization Sunglasses ||  Large | Frame width: 145mm | Frame Height: 45mm | Frame Dimensions: (57-16-145)mm ||They have scratch coating, blocks 100% harmful UV rays up to 400 nm and are very lightweight and highly impact resistant.",
      price:3000
    },
    {
      id:4,
      title:"ELEGANTE",
      description:"ELEGANTE Smooth Leg Covers Lightweight Square Kabir Singh Sunglasses for Men || 55 mm, Free Size fit to all adults Size : 55 mm, Free Size fit to all adults with small and medium faces, not suitable for too big faces",
      price:1200
    }
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [present]);
  return (
    <div className="Eyeglasses">
       <div className="mainproduct">
        <div className="productdetails">
          <h1>{spects[present-1].title}</h1>
          <p>{spects[present-1].description}</p>
           <h2>Price : <span style={{color:"#ff00bf"}}>Rs. {spects[present-1].price}</span></h2>
           <button>BUY</button>
        </div>
        <div className="productpic">
          <img src={pics[present-1]} alt="The pic" />
          <h2>{spects[present-1].title}</h2>
        </div>
       </div>
       <h3>More Glasses</h3>
       <div className="productlist">
        {
          spects.map((item,key)=>{
            if(item.id!=present) return <>
             <div key={key} onClick={()=>{setPresent(p=>p=item.id)}} className="minproduct"> 
             <h1>{item.title}</h1>
             <div className="smallspectpic">
                 <img src={pics[item.id-1]} alt="The pic" />
             </div>
             </div>
            </>
          })
        }
        
       </div>
    </div>
  )
}
