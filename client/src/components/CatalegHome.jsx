import React from 'react'
import cataleg from '../pages/tienda/Cataleg';



export default function CatalegHome() {

  return (
    <div className='CatalegHome'>
    <h1 href={cataleg}>Cataleg</h1>
    <img src='https://i.imgur.com/gKq7Lay.jpg'
    // href={} -- router
    className='bag1'
    style={{ width: "30em" }}
    alt='bag1'
    />
    <img src='https://i.imgur.com/KucgSMo.jpg'
    // href={} router
    className='cup'
    style={{ width: "30em" }}
    alt='cup'
    />
    <img src='https://i.imgur.com/B2guuEe.jpg'
    // href={} router
    className='bag2'
    style={{ width: "30em" }}
    alt='bag2'
    />
    </div>
  )
}
