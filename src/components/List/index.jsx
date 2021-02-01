import React from 'react'
import classNames from 'classnames'
import './List.scss'

export const List = (props) => {
    return (
        <div>
            <ul className="list">
                {props.list.map((item, index) => (
                    <li key={index} className={classNames(item.className, {'active': item.active})}>
                        <i>
                            <i className={`badge badge--${item.color}`} />
                        </i>
                        <span>{item.name}</span>
                    </li>
                    
                ))
                }


            </ul>
        </div>
    )
}
