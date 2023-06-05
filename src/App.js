import Editor from './components/Editor';
import { useState } from 'react';


function App() {

  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [javascript,setJavascript] = useState('');

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
  `

  return (
    <>
      <div className="pane top-pane">
      <Editor 
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor 
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor 
          language="javascript"
          displayName="Javascript"
          value={javascript}
          onChange={setJavascript}
        />
        
        
      </div>
      <div className="pane">
        <iframe title="output" srcDoc={srcDoc} sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </>
  );
}

export default App;
