import React, { Component } from 'react'
import Link from 'next/link'
class TodoList extends Component {
  
  render(props) {
    return (
      <div className="todoListMain">
        <div className="header">
            <header>
        
        <h1>todo <span>List</span></h1>
        <h2> A simple todo list</h2>
        </header>
        
          <form onSubmit={this.props.addItem}>
            <input
            className = "todoInput"
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
        <style jsx>{`
       
        header {
            text-align: center;
        }
        header h1 {
            font-size: 64px;
            font-weight: 300;
            margin: 80px 0 25px;
            color: #2c3e50;
        }
        header h1 span {
            font-weight: 700;
        }
        header h2 {
            color: #bdc3c7;
            font-weight:300;
        }

        form {
            width: 800px;
            margin: 20px auto 20px;
        }
        .todoInput {
            width: 100%;
            height: 60px;
            background: none;
            border: none;
            border-bottom: 1px solid #34495e;
            outline: none;
            font: 300 28px 'Ubuntu', sans-serif;
            padding: 20px;
            color: #34495e;
        }
        
       
      `}</style>
      <style global jsx>{`
      display:flex,
      justify-content:center
      `}</style>
      </div>
    )
  }
}

export default TodoList


