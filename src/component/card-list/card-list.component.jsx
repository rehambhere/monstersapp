import React from 'react';
import {Card} from '../card/Card.component'
import './card-list.style.css'
export const CardList =(props)=>(
    <div className='card-list'>
    {props.monsters.map(item=>{
        return <Card key={item.id} monster={item}/>
    })}
</div>
)
  
