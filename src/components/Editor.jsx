import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import {Controlled as CodeMirror} from 'react-codemirror2'
import { Box } from '@chakra-ui/react';


const Editor = ({language,
                displayHeader,
                value,
                onChange
                }) => {
    

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    

    return (
        <Box >
            <div className = "container--editor-header">
                <Box backgroundColor = "blackAlpha.800" 
                     color="white" 
                     padding={4} 
                     borderTopLeftRadius="2xl"
                     borderTopRightRadius="2xl">
                    {displayHeader}
                </Box>
               
            </div>
            {/* used code mirror library for the text editor*/}
            <CodeMirror 
                onBeforeChange={handleChange}
                value={value}
                autoCursor="true"
                options = {{
                    lineWrapping: true,
                    mode: language,
                    lineNumbers: true,
                    theme: "monokai",     
                    autoCursor:true          
                }}
                selection={{
                    focus: true
                }}
                onSelection={(editor, data) => {editor.refresh()}}
               
            />
        </Box>
    )
}

export default Editor

