import React from 'react'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { createNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                  this.props.store.dispatch(voteAnecdote(anecdote.id))
                  this.props.store.dispatch(createNotification("Voted for " + anecdote.content))
                }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
