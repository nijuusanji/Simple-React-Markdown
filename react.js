// marked.setOpptions({
//     breaks:true
// })

const renderer = new marked.Renderer();

function App() {
    const [text,setText] = React.useState(placeholder)

    const markdown = marked(text, { breaks: true });

    return (
        <div>
        <h2 className="text-center pt-4">Simple React Markdown</h2>
            <div class="d-flex justify-content-center">
              <div class="box">
                <div id="box-e">
                  <h3 id="E-title">Editor</h3>
                </div>
                <textarea
                  id="editor"
                  placeHolder="Enter your text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div class="box">
                <div id="box-e">
                  <h3 id="E-title">Preview</h3>
                </div>
                <div id="pre-box">
                  <div
                    id="preview"
                    dangerouslySetInnerHTML={{ __html: markdown }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
      );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)
`;

ReactDOM.render(<App />,document.getElementById("app"));
