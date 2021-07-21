import Editor from "./components/Editor";
import { useState, useEffect } from "react";
import FileExplorer from "./components/FileExplorer";
import "./App.css";
import { Box, Center, Flex } from "@chakra-ui/react";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javaScript, setJavaScript] = useState("");
  const [srcDoc, setSrcDoc] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javaScript}</script>
      </html>
    `);
      return () => clearTimeout(timeout);
    }, 280);
  }, [html, css, javaScript]);

  return (
    <Flex flexDirection="column">
      <Box mt={2} mb={2} backgroundColor="blackAlpha.700">
        <FileExplorer
          html={html}
          setHtml={setHtml}
          javaScript={javaScript}
          setJavaScript={setJavaScript}
          css={css}
          setCss={setCss}
        />
      </Box>

      <Center height="35vh" width="100vw" backgroundColor="white">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="97%"
          height="100%"
          frameBorder="none"
        />
      </Center>
    </Flex>
  );
};

export default App;
