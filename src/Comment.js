import React, { Component } from 'react'

class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.remove = this.remove.bind(this)
  }

  edit () {
    this.setState({editing: true})
  }
  remove () {
    this.props.removeCommentText(this.props.index)
  }
  save () {
    this.props.updateCommentText(this.refs.newText.value, this.props.index)
    this.setState({editing: false})
  }
  renderNormal () {
    return (
      <div className='board'>
        <div className='text'>{this.props.children}</div>
        <button className='edit button' onClick={this.edit}>EDIT</button>
        <button className='remove button' onClick={this.remove}>REMOVE</button>
      </div>
    )
  }
  renderForm () {
    return (
      <div className='text'>
        <textarea className='textarea' ref='newText' defaultValue={this.props.children} />
        <button className='save button' onClick={this.save}>SAVE</button>
      </div>
    )
  }

  render () {
    if (this.state.editing) {
      return this.renderForm()
    } else {
      return this.renderNormal()
    }
  }
}

export default Comment
