import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/MyLayout.js'
import Link from 'next/link'
import TodoList from './Todolist';
import TodoItems from './TodoItems';


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
      <div className="App">
      <link href="app.css" rel="stylesheet" />
        <TodoList className = 'App'
        addItem={this.addItem}
        inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        
        />
        <TodoItems entries = {this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}
// export default App
export default () => (
    <div>
    <App/>
    <style jsx>{
        `
         
body {
	font-family: 'Montserrat', sans-serif;
	background: #ecf0f1;
}

        
        
        `
    }</style>
    </div>
)