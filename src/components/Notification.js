import React from 'react'
import { removeNotification } from './../reducers/notificationReducer'

class Notification extends React.Component {
  render() {
      const notification = this.props.store.getState().notification
      if (notification !== '') {
      const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
      }

      setTimeout(() => {
            this.props.store.dispatch(removeNotification())
          }, 5000)

      return (
        <div style={style}>
          {notification}
        </div>
      )
    }
  else {
    return ('')
  }
}
}

export default Notification
