import React from 'react'
import './App.css'
import {List} from './components/List/index'

const list = [
  {id: 0, name: 'Все задачи', color: null},
  {id: 1, name: 'Покупки', color: "green"},
  {id: 2, name: 'Фронтенд', color: "blue"},
  {id: 3, name: 'Фильмы и сериалы', color: "pink"},
  {id: 4, name: 'Книги', color: "lgreen"},
  {id: 5, name: 'Личное', color: "grey"},
]

function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <List list={list} />
            </div>
            <div className="todo__tasks"></div>
        </div>
    )
}

export default App
