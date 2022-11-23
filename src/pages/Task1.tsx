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

  const result = findFrequent('ejhghTTTTTTTTTTTbglkddd');

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">TestTask1</h1>
        <p>Write a function that finds the most frequent character in a string (case insensitive)</p>
        <div>
          <span>Result - </span>
          <span className="has-text-primary has-text-weight-bold">({result})</span>
        </div>
      </div>
    </div>
  )
}
