import React, { useEffect, useState } from 'react'
import Spect1 from '../Assets/EyeGlasses/Spect1.png';
import Spect2 from '../Assets/EyeGlasses/Spect2.png';
import Spect3 from '../Assets/EyeGlasses/Spect3.png';
import Spect4 from '../Assets/EyeGlasses/Spect4.png';

export default function EyeGlasses() {
  const [present,setPresent]=useState(1);
  const pics=[Spect1,Spect2,Spect3,Spect4]
  const spects=[
    {
      id:1,
      title:"Lenskart Hustlr",
      description:"Lenskart Hustlr - As Seen On Shark Tank | Peyush Bansal Glasses | Zero Power Bluecut & Antiglare Computer Eyeglasses | Blue Sky Full Rim Square | For Men & Women | Medium | LB E14058",
      price:999
    },
    {
      id:2,
      title:"Fastrack Unisex",
      description:"Fastrack Unisex-Adult Transparent Prescription Eyewear Frames-S (Fst-FRM-FT1194UFP2VCG)|Frame size: Lens Width: 48 mm, Bridge Width: 20 mm, Temple Length: 140 mm",
      price:948
    },
    {
      id:3,
      title:"Michael Kors",
      description:"Michael Kors 0MK3013-1157 DK TORTOISE/GOLD -52mm womens | GENDER: Woman SHAPE: Round FRONT MATERIAL: Metal TEMPLE: Metal BRIDGE DESIGN: Standard GEOFIT: Global BASE: Base 4 RX-ABLE | Size: Lens-52 Bridge-17 B-Vertical Height-43.0 ED-Effective Diameter-54.0 Temple-135mm",
      price:9235
    },
    {
      id:4,
      title:"Oakley",
      description:"Oakley Men Clear Lens Rectangle Frames - 0OX3218 | Lens Width:56, Bridge Width:18, Arm Length:140 | Frame Type:Nylon (Semi-Rimless), Lens Type:Non polarized",
      price:8890
    }
  ]
  React.useEffect(() => {
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
