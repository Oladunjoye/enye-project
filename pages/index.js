import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/MyLayout.js'
import Link from 'next/link'
import TodoList from './Todolist';
import TodoItems from './TodoItems';
import fetch from 'isomorphic-unfetch'


class App extends Component {
    constructor() {
        super()
        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        }
      }
      
      handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }
      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            currentItem: { text: '', key: '' },
          })
        }
      }

      deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
          return item.key !== key
        })
        this.setState({
          items: filteredItems,
        })
      }
  render() {
    return (
      <div >
      <link href="app.css" rel="stylesheet" />
        <TodoList className = 'App'
        addItem={this.addItem}
        inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        
        />
        <TodoItems entries = {this.state.items} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default class Index extends Component{
 
  static async getInitialProps(){
    try{ const response = await fetch('http://localhost:3000/todos')
     const items =  await response.json()
    
    
    return {items: items}
  }
  catch (error){
    return response.status(400).send(error);
  }
  }
 render(){

 
  return(
  <div className="App">
  <App/>
  

  <ul className="list">
    {this.props.items.map((item) => <li className = "task" key={item.key} >{item.text} </li>
    )}
    <style jsx>{`
        .list {
          width: 800px;
          margin: 0 auto;
        }
          
        .task {
          width: 100%;
          height: 60px;
          line-height: 60px;
          font-size: 20px;
          padding: 0 20px;
          color: #34495e;
          transition: all .3s ease;
        }
        .task:hover {
          background: rgba(0, 0, 0, .02);
          cursor: pointer;
        }
        
        .task:hover span{
          opacity: 1;
        }
        li span {
          float: right;
          color: #c0392b;
          transition: all 0.3s;
          opacity: 0;
        }
        
        li span:hover {
          color: #e74c3c
        }
        
      `}</style>
      <style global jsx>{`
      display:flex,
      justify-content:center
      `}</style>
      
  </ul>
    </div>
  
  )
 }
}
