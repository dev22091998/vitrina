import React from 'react'
import GoodItem from './GoodItem';


export default function GoodList(props) {
    const {goods = []} = props;

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

  return (
    <div className='goods'>
        {goods.map((item)=>(
            <GoodItem key={item.id} {...item}/>
        ))}
    </div>
  )
}
