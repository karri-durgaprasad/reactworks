import React from 'react'
import { MobileData } from '../Data/Mobile'
import { Link } from 'react-router-dom'
function Dismob() {
    
  return (
  <div>
  <Link to='/products'><span>View Less</span></Link>  
   <div style={{display:'flex',flexWrap:'wrap',gap:'10px',paddingLeft:'10px',paddingBottom:'10px'}}>
   
    {
        MobileData.map((e)=>{
            return(
                <Link to={`/detailmob/${e.id}`}>
                <div style={{border:'solid 1px black'}}>
                    <img src={e.image} alt='' style={{height:'300px',width:'300px'}}/>
                    <p style={{margin:'0px',textAlign:'center'}}>id:{e.id}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Brand:{e.brand}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Model:{e.model}</p>
                    <p style={{margin:'0px',textAlign:'center'}}>Price:{e.price}</p>
                    <div style={{display:'flex',justifyContent:'center',paddingBottom:'10px'}}>
                    <button className='btn btn-warning'>Add to Cart</button>
                    </div>
                    </div>
                    </Link>
            )
        })
    }
   </div>
   </div>
  )
}

export default Dismob