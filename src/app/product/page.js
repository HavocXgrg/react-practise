'use client'
// import { name } from 'ejs'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

/*
const page = () => {
    const app ='uProd'
    const productList = [
        {id: 7, name:'football', price:1500, quantity: 5, imgLink: 'https://purepng.com/public/uploads/large/purepng.com-golden-footballobjectsgolden-footballballsoccerobjectgoldgoldensportfootball-631522323197a79p6.png' },
        {id: 10,name:'bat', price:20000 , quantity:8, imgLink: 'https://m.media-amazon.com/images/I/317VTY6RngL._AC_UF1000,1000_QL80_.jpg'},
        {id: 30,name:'helmet', price:6000, quantity:2, imgLink: 'https://5.imimg.com/data5/SELLER/Default/2021/4/RF/MS/HN/74206329/vega-cliff-full-face-bike-helmet-500x500.jpg'},
    ]
	return (
		<div>
			<div style={{display:"flex"}}>
				{productList.map((item,id) => {
				 return <Link href={`/product/${item.id}`}>
				    <div className='card'>
					 <img style= {{width:"90px", height:"80px"}} src={item.imgLink}></img>
					 {item.name}
					 <p>{item.price}</p>

				    </div> </Link>
			    })}
			</div>

		</div>

	)
}
*/
/* props ideas with parents and child functions.
const test = () => {
	const handleClick = () =>{
		console.log("this is from test")
	}

	return (
		<div>
		 <input/>
		 <Cart chocolate = "kitkat" callMe ={handleClick} />
		</div>
	)
}

const Cart = (props) => {
  return (
	<div>
	 <button onClick={props.callMe}>ClickME</button>
	</div>
  )
}
*/


//practising state, useState
const prac = () => {
	const [num, setNum] = useState(10)
	const handleChange = (operation) => {
		if(operation === 'inc'){
			setNum(num+1)
		}
		else if(operation === 'dec'){
			if(num === 0){
				alert("num can't be less than 0")
			}
			else{
				setNum(num-1)
			}
		}
	}
  return (
	<div className='calculator'>
	    <h2>{num}</h2>
        <button onClick={()=> handleChange('inc')}>Increment</button>
        <button onClick={()=> handleChange('dec')}>Decrement</button>
    </div>
  )
}

export default prac
