import React, { Component } from 'react'
import Comment from './Comment'

class Board extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: [
      ]
    }
  }

  add = (text) => {
    var arr = this.state.comments
    arr.push(text)
    this.setState({comments: arr})
  }
  removeComment = (i) => {
    console.log('Removing comment ' + i)
    var arr = this.state.comments
    arr.splice(i, 1)
    this.setState({comments: arr})
  }
  updateComment = (newText, i) => {
    console.log('Updating COmEnT')
    var arr = this.state.comments
    arr[i] = newText
    this.setState({comments: arr})
  }

  commentMaker = (text, i) => {
    return (
      <Comment key={i} index={i} updateCommentText={this.updateComment} removeCommentText={this.removeComment}>
        {text}
      </Comment>)
  }

  render () {
    return (
     <div className='comment'>
      <button className='add button' onClick={this.add.bind (null, 'Sample Text')}>ADD NEW COMMENT</button>
      <div>
        {
          this.state.comments.map(this.commentMaker)
        }
      </div>
     </div>
    )
  }
}

export default Board
