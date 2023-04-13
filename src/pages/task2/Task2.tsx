import classNames from 'classnames';
import { useState } from 'react';
import UseLocalStorage from '../../hooks/UseLocalStorage';

export const Task2 = () => {
  const [query, setQuery] = useState<string>('');
  const [num23, setNum23] = UseLocalStorage('num23', '');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setQuery(event.target.value);
  }

  const onSumbit = (event: React.FormEvent) => {
    event.preventDefault()
    setNum23(query);
  }

  const onClear = () => {
    setQuery('')
    setNum23('')
    localStorage.removeItem('num23')
  }

  const isEven = +num23! % 2 === 0;

  return (
    <div className="section">
      <div className="container">
        <h1 className='title'>Task 2</h1>
        <p className='content'>Create simple HTML form with text field and buttons “Set” and “Clear”. 
          On submit form set item to local storage with key “num23” and value from the text field. 
          On click “Clear” button clean up text field and delete item “num23” from local storage. 
          On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form. 
          Paint paragraph in red if item value is odd and in green if item value is even.
          Text field should accept only numbers. Form should not be submitted if the field value is empty.
          Disable “Set” button if the field value is empty.
        </p>
        <hr />
        <div className="field">
          <label className="label">Form</label>
          <div className="control">
            <p className={classNames(
              {'has-background-danger': !isEven}, 
              {'has-background-success': isEven })}
            >
              {num23}
            </p>
            <form>
              <input 
                type="number" 
                className="input" 
                value={query}
                onChange={onInputChange}
              />
            </form>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button 
              disabled={!query} 
              className="button is-link"
              onClick={onSumbit}
            >
              Set
            </button>
          </div>
          <div className="control">
            <button 
              type="button"
              className="button is-warning"
              onClick={onClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}