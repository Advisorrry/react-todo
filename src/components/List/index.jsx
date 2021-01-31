import React from 'react'
//import img from '../assets/img/list.svg'
import './List.scss'

export const List = ({ list }) => {
    return (
        <div>
            <ul className="list">
                {list.map((item) => (
                    <li>
                        <i>
                           <i className={`badge badge--${item.color}`}></i> 
                        </i>
                        <span >{item.name}</span>
                    </li>
                    
                ))
                }
            </ul>
        </div>
    )
}
