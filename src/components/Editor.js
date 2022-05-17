import React from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const Editor = (props) => {

    const {value, displayName} = props

    const handleChange = (value) => {
        console.log(value)
    }

  return (
    <div className='editor-container'>
        <div className='editor-title'>
            {displayName}
        </div>
        <CodeMirror
            value={value}  
            extensions={[javascript()]}
            onChange={handleChange(value)}
            theme='dark'
            width='500px'
            height='200px'
    />
    </div>
  )
}

export default Editor