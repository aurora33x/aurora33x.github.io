import React from 'react'

class TodoItem extends React.Component {
  
  handleDelete = () => { 
    const {deleteItem, index} = this.props
    deleteItem(index)
  }

  handleIsEnd = () => { 
    const {handleIsEnd, index} = this.props
    handleIsEnd(index)
  }

  render() {
    const {content,index,isEnd} = this.props
    return (
      <li className="content notification is-primary">
        <label className="checkbox">
        <input
          onChange={this.handleIsEnd}
          checked={isEnd}
          type="checkbox"
        />
            <span className="tag">{index + 1}</span>
            {content}
            <span
              className={isEnd ? 'tag is-info' : 'tag is-warning'}
            >
              {isEnd ? 'Finished' : 'Unfinished'}
            </span>
        </label>
          <button onClick={this.handleDelete} className="delete is-small">Delete</button>
      </li>
    )
  }
}
export default TodoItem