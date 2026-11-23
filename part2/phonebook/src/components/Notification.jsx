const Notification = ({ message, type }) => {
  if (!message) {
    return null
  }

  const colors = {
    success: 'green',
    error: 'red',
  }

  const color = colors[type]
  if (!color) {
    console.log(`Unknown notification type: "${type}"`)
  }

  const notificationStyle = {
    color: color || 'black',  // use black in case of a bad color type
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification