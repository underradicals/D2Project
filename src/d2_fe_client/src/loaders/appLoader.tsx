import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { default } from 'react-syntax-highlighter/dist/esm/styles/prism';

export async function appLoader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let codestring: string = "";

  if (!response.ok) {
    throw new Error("Error: 404 Bad Request");
  }

  const data = await response.json();
  if (data === null) {
    codestring = `{}`
  }else {
    codestring = `{\n "id": ${data.id},\n "title": ${data.title},\n "completed": ${data.completed}\n}`
  }
  return (
    <SyntaxHighlighter language="json">
      {codestring}
    </SyntaxHighlighter>
  )
}