import React from 'react'

const TextAnimation = (props) => {
    const {text} = props;
  return (
    <div class="content">
    <h2 class="text_shadows">{text}</h2>
  </div>
  )
}

export default TextAnimation