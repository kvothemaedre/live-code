import { Button, 
         Menu,
         MenuButton,
         MenuList,
         MenuItem,
         Center,
         } from "@chakra-ui/react";
import {ChevronDownIcon} from '@chakra-ui/icons';
import FileSaver from "file-saver";
import React from 'react'

const FileSave = ({html,css,javaScript}) => {

    const downloadFile= (file) => {       
        
        if (file === "file1") {
            const file1 = new File([html], "index.html", {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(file1);
        } else if (file === "file2") {
            const file2 = new File([css], "index.css", {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(file2);
        } else if (file === "file3") {
            const file3 = new File([javaScript], "index.js", {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(file3);
        } else if (file === "all") {
            const file1 = new File([html], "index.html", {type: "text/plain;charset=utf-8"});
            const file2 = new File([css], "index.css", {type: "text/plain;charset=utf-8"});
            const file3 = new File([javaScript], "index.js", {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(file1);
            FileSaver.saveAs(file2);
            FileSaver.saveAs(file3);

        }
    }

    return (
        <Center>
           <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Download
            </MenuButton>
            <MenuList>
                <MenuItem onClick = {() => downloadFile("file1")}>index.html</MenuItem>
                <MenuItem onClick = {() => downloadFile("file2")}>index.css</MenuItem>
                <MenuItem onClick = {() => downloadFile("file3")}>index.js</MenuItem>
                <MenuItem onClick = {() => downloadFile("all")}>download all</MenuItem>
            </MenuList>
            </Menu>  
        </Center>
    )
}

export default FileSave
