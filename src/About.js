import React from 'react'

export default (props) => {
  return (
    <div>
          <h3>
            Hello About.JS 
            {props.match.params.urlReq}
          </h3>
          
      </div>
  )
}
