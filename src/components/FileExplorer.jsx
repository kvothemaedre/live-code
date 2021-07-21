import { useState } from "react";
import Editor from "./Editor";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
function FileExplorer({
  html,
  setHtml,
  css,
  setCss,
  javaScript,
  setJavaScript,
}) {
  return (
    // Used tabs to show file explorer
    <Tabs variant="unstyled" ml={2}>
      <Box mb = {2}>      
        <TabList width="15vw" color="white" ml = {6}>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.html</Tab>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.css</Tab>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.js</Tab>
        </TabList>
      </Box>
      <Box ml={6}>
        <hr width="40%"/>
      </Box>
      <TabPanels>
        <TabPanel>
          <Editor
            language="xml"
            displayHeader="index.html"
            value={html}
            onChange={setHtml}
          />
        </TabPanel>
        <TabPanel>
          <Editor
            language="css"
            displayHeader="index.css"
            value={css}
            onChange={setCss}
          />
        </TabPanel>
        <TabPanel>
          <Editor
            language="xml"
            displayHeader="index.js"
            value={javaScript}
            onChange={setJavaScript}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default FileExplorer;
