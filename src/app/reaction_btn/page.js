'use client'
import React, { useState } from 'react'
import { GrLike } from "react-icons/gr";
import { LuAngry } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { TfiFaceSad } from "react-icons/tfi";

const page = () => {
    const [reactionOpen, setReactionOpen] = useState(false)
    const [reactionType, setReactionType] = useState(null)

    const HandleReaction = (action) =>{
        // console.log(reactionType, action);
        setReactionType(reactionType === action ? '' : action); //ternary operators

    }
    const reactions = [
        {type: 'like', icon:<GrLike size={'2rem'} color='blue' /> },
        {type: 'angry', icon:<LuAngry size={'2rem'}color='red' /> },
        {type: 'sad', icon:<TfiFaceSad size={'2rem'}color='orange' /> },
        {type: 'love', icon:<FiHeart size={'2rem'}color='red' /> },
        {type: null, icon:<GrLike size={'2rem'} /> }
    ]

    const ReactionDiv = () => {
        return (
            <div>
                {reactions.map((item) => {
                    if(item.type)
                   return(
                            <button //key for no key prop warning
                                key={item.type} onMouseEnter={() => setReactionOpen(true)} onClick={() => HandleReaction(item.type)}>
                                {item.icon}
                            </button>
                        )
                 })}
            </div>
        )
    }
    const ReactionBtn = () => {
        const selectedItem = reactions.find(item => item.type === reactionType)
        return(
            <button  onMouseEnter={()=> setReactionOpen(true)} 
                onClick={()=> HandleReaction(selectedItem?.type || '')}>
                {selectedItem ? selectedItem.icon : <GrLike size={'2rem'} />} 
            </button> 
        )
    }
  return (

    <div className='finalReturn'>
        <h2> {reactionType}</h2>
        {reactionOpen && <ReactionDiv/>}
        {<ReactionBtn/>}
      
    </div>
  )
}

export default page
