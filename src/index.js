import React from 'react'
import  ReactDOM  from 'react-dom'

import App from "./app.js"

const Index = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById("root"));
