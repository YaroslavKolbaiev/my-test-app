export const Task3 = () => {
  const url = new URL("http://localhost:63342/test/index.html?search_mode=movies&q=top+gun");
  const isSearchQuery = url.search[0] === '?';

  const result = isSearchQuery 
    ? JSON.parse(`{
      ${url.search.slice(1)
        .split('&')
        .map(x => x.split('=').map(x => `"${x}"`).join(':'))
        .join(', ')
      }
    }`)
    : 'Query params are not available';

  return (
    <div className="box">{JSON.stringify(result)}</div>
  )
}