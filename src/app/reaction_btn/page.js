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
        if(reactionType === action){
            setReactionType('')
        } else{
            setReactionType(action)
        }
    }

    const ReactionDiv = () => {
        return (
            <div className="reactionBtn">
                 <button  onMouseEnter={()=> setReactionOpen(true)} onClick={()=> HandleReaction('like')}><GrLike size={'2rem'} color='blue' /></button>
                 <button  onMouseEnter={()=> setReactionOpen(true)} onClick={()=> HandleReaction('angry')}><LuAngry size={'2rem'}color='red' /></button>
                 <button  onMouseEnter={()=> setReactionOpen(true)}onClick={()=> HandleReaction('love')}><FiHeart size={'2rem'}color='red' /></button>
                 <button  onMouseEnter={()=> setReactionOpen(true)}onClick={()=> HandleReaction('sad')}><TfiFaceSad size={'2rem'}color='orange' /></button>
            </div>
        )
    }
    const ReactionBtn = () => {
        if(reactionType === 'angry'){
            return(
                <button onClick={()=> HandleReaction('angry')} onMouseEnter={()=> setReactionOpen(true)}><LuAngry color={reactionType && 'red'} size={'2rem'}/></button>
            )
        } else if(reactionType === 'love'){
            return (
                <button onClick={()=> HandleReaction('love')} onMouseEnter={()=> setReactionOpen(true)}><FiHeart color={reactionType && 'red'}  size={'2rem'}/></button>
            )
        } else if(reactionType === 'sad'){
            return(
                <button onClick={()=> HandleReaction('sad')} onMouseEnter={()=> setReactionOpen(true)}><TfiFaceSad color={reactionType && 'orange'} size={'2rem'}/></button>
            )
        } else{
            return ( 
                <button onClick={()=> HandleReaction('like')} onMouseEnter={()=> setReactionOpen(true)}><GrLike color={reactionType && 'blue'} size={'2rem'}/></button>
                )
        }
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
