import React from 'react'
import '../App.css';
import { Card } from 'react-bootstrap';

export default function StoreItem(props) {
    const {item} = props;
  return (
    <Card>
       <img className='small' src={item.image}  alt={item.product} />
    </Card>
  )
}
//typescrpt

// type StoreItemProps = {
//     id: number
//     name: string
//     price: number
//     image: string
// }

// export function StoreItem({ id, name, price, image}:StoreItemProps) {
    
// }

