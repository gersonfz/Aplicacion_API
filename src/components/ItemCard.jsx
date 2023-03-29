import React from 'react'
import Item from './Item'

export const ItemCard = ({item}) => {
  return (
    item.map(element => 
        <Item
            key={element.id}
            {...element}
        />
        )
  )
}

export default ItemCard