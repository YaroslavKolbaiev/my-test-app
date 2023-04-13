type Props = {
  inputValue: string;
  setInputValue: (value: string) => void
}

export const InputField: React.FC<Props> = ({ 
  inputValue,
  setInputValue
 }) => {

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>, 
    callBack: (value: string) => void
  ) => {
    event.preventDefault()
    callBack(event.target.value);
  }

  return (
    <div className="field">
                <label className="label has-text-primary">Name</label>
                <div className="control">
                   <input 
                     value={inputValue} 
                     className="input" 
                     type="text" 
                     placeholder="name" 
                     onChange={(event) => {
                      onInputChange(event, setInputValue)
                     }}
                    />
                </div>
              </div>
  )
}