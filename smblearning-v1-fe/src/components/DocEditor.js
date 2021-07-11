import React, {useState} from 'react'
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import "./DocEditor.css";

function DocEditor({setDescription}) {
  const [text, setText] = useState('')

  const handleChange = value =>{
    setDescription(value)
    setText(value)
  }

  
  return (
    <div>
      <ReactQuill value={text} onChange={handleChange} />
    </div>
  )
}

export default DocEditor

