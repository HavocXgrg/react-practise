import { name } from 'ejs'
import React from 'react'

const page = () => {
    const app ='uProd'
    const productList = [
        {name:'football', price:1500, quantity: 5, imgLink: 'https://purepng.com/public/uploads/large/purepng.com-golden-footballobjectsgolden-footballballsoccerobjectgoldgoldensportfootball-631522323197a79p6.png' },
        {name:'bat', price:20000 , quantity:8, imgLink: 'https://m.media-amazon.com/images/I/317VTY6RngL._AC_UF1000,1000_QL80_.jpg'},
        {name:'helmet', price:6000, quantity:2, imgLink: 'https://5.imimg.com/data5/SELLER/Default/2021/4/RF/MS/HN/74206329/vega-cliff-full-face-bike-helmet-500x500.jpg'},
    ]
	return (
		<div>
			<div style={{display:"flex"}}>
				{productList.map((item,id) => {
				 return <div className='card'>
					<img style= {{width:"90px", height:"80px"}} src={item.imgLink}></img>
					{item.name}
					<p>{item.price}</p>
				</div>
			})}
			</div>

		</div>

	)
}

export default page
