import React, { Component } from 'react'

import Link from 'next/link'

class TodoItems extends Component {
  // createTasks(item) {
  //   return <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}</li>
  // }
  
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map((item) => {
      return <li className = "task" key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}
      <span >X</span>
      <style jsx>{`
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
      </li>
    })

    return <ul className="list">{listItems}
    <style jsx>{`
        ul {
          color: blue;
        }
        li {
          background: red;
        }
        .list {
          width: 800px;
          margin: 0 auto;
        }
       
        
      `}</style>
      <style global jsx>{`
      display:flex,
      justify-content:center
      `}</style>
    </ul>
  }
}




export default TodoItems