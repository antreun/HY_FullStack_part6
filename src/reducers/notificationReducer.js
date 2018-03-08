const initialState ='My first notification'

const notificationReducer = (store = initialState, action) => {
  if (action.type === 'CREATE_NOTIFICATION') {
    return action.content
  }
  if (action.type === 'REMOVE_NOTIFICATION') {
    return ''
  }

  return store
}

export const createNotification = (content) => {
  console.log("creating...")
  return {
    type: 'CREATE_NOTIFICATION',
    content
  }
}

export const removeNotification = (content) => {
  console.log("removing...")
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer
