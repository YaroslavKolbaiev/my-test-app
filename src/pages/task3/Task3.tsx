export const Task3 = () => {
  const url = new URL('http://localhost:63342/test/index.html?em=world&ew=book');
  const isSearchQuery = url.search[0] === '?';

  const result = () => {
    try {
      return isSearchQuery 
    ? JSON.parse(`{
      ${url.search.slice(1)
        .split('&')
        .map(x => x.split('=').map(x => `"${x}"`).join(':'))
        .join(',')
      }
    }`)
    : 'Query params are not available';
    } catch (err) {
      return 'invalid URL';
    }
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Task  3</h1>
        <div className="content">
          <p>Write script that will parse query params from url and transform it into object with according key and value.</p>
          <p>URL example:</p>
          <p>{`${url}`}</p>
          <p>Object example:</p>
          {`{
            “em”:”world”,
            “ew”:”book”
          }`}
        </div>
        <hr />
        <div className="box has-background-info has-text-white">{JSON.stringify(result())}</div>
      </div>
    </div>
  )
}