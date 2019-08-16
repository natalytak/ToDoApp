import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "lightyellow",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // textDecorection: this.props.todo.completed ?
            // 'line-through' : 'none',
            color: this.props.todo.completed ?
            'red' : 'green'
        }
    }

    //The longer version of doing the function above:

    // getStyle = () => {
        //     if(this.props.todo.completed) {
        //         return {
        //             textDecorection: 'line-through'
        //         }
        //     } else {
        //         return {
        //             textDecorection: 'none'
        //         }
        //     }
        // }
    markComplete = (e) => {

    }



  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p> 
            <input type="checkbox" onChange={this.props.markComplete.bind
            (this, id)} /> {' '}
            { title } 
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
  }

  const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 8px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }

//   const itemsStyle = {
//       backgroundColor: '#f3f3f3'
//   }

export default TodoItem;