import Editor from "./Editor";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex
} from "@chakra-ui/react";
import FileSave from "./FileSave";

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
      <Flex mb = {2} justifyContent="space-between">      
        <TabList width="15vw" color="white" ml = {6}>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.html</Tab>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.css</Tab>
          <Tab _selected={{ color: "white", bg: "orange.400" }}>index.js</Tab>
        </TabList>
        <Box mr={6} mt = {2}>
          <FileSave html = {html} css = {css} javaScript = {javaScript} />
        </Box>
      </Flex>
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
