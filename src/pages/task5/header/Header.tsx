type Props = {
  isActiveModal: boolean;
  setIsActiveModal: (value: boolean) => void
  query: string
  setQuery: (value: string) => void
}

export const Header: React.FC<Props> = ({ 
  isActiveModal,
  setIsActiveModal,
  query,
  setQuery
 }) => {
  
  const onQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>, 
    callBack: (value: string) => void
  ) => {
    event.preventDefault()
    callBack(event.target.value);
  }

  return (
    <div className="level">
         <div className="level-left">
          <button 
            className="button is-primary is-light level-item"
            onClick={() => {
              setIsActiveModal(!isActiveModal)
            }}
          >
            Add product
          </button>
         </div>
          <div className="level-right">
            <input
              value={query}
              className="input is-primary level-item" 
              type="text" 
              placeholder="search products"
              onChange={(event) => {
                onQueryChange(event, setQuery)
              }}
            />
          </div>
        </div>
  )
}