import React from 'react'
import './App.css'
import {List} from './components/List/index'
import listimg from './assets/img/list.svg'
import add from './assets/img/add.svg'

const list = [
    {id: 0, name: 'Все задачи', img: listimg },
    {id: 1, name: 'Покупки', color: 'green'},
    {id: 2, name: 'Фронтенд', color: 'blue'},
    {id: 3, name: 'Фильмы и сериалы', color: 'pink', active: true},
    {id: 4, name: 'Книги', color: 'lgreen'},
    {id: 5, name: 'Личное', color: 'gray'},
    {id: 6, name: 'Добавить пункт', img: add, className: 'list__add-button'},
]

function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <List
                    list={list}
                    isRemovable={true}
                />
            </div>
            <div className="todo__tasks"></div>
        </div>
    )
}

export default App
