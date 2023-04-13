import {useState} from 'react';

export const Task1 = () => {
  const findFrequent = (str: string) => {
    let max = 0;
    let maxChar = '';
    const strToLowerCase = str.toLocaleLowerCase();

    strToLowerCase.toLocaleLowerCase().split('').forEach(char => {
      if(strToLowerCase.split(char).length > max) {
        max = strToLowerCase.split(char).length;
        maxChar = char;
      }
    });
   
    return maxChar;
  }
  
  const [query, setQuery] = useState('');
  const result = findFrequent(query);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Task 1</h1>
        <p>Write a function that finds the most frequent character in a string (case insensitive)</p>
        <hr />
        <div>
          <input 
            type="text" 
            className="input mb-4" 
            value={query}
            onChange={(event) => {setQuery(event.target.value)}}
            placeholder="type a string"
          />
          <div>
            <span>String - </span>
            <span className='has-text-info has-text-weight-bold'>{query}</span>
          </div>
          <div>
            <span>Result - </span>
            <span className="has-text-primary has-text-weight-bold">({result})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
