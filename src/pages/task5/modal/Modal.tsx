import classNames from "classnames"
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/ReduxApp";
import { Product } from "../../../types/Product";
import { actions as productsActions } from '../../../features/products';
import { InputField } from "../input_field/InputField";

type Props = {
  isActiveModal: boolean;
  setIsActiveModal: (value: boolean) => void
}

export const Modal: React.FC<Props> = ({ isActiveModal, setIsActiveModal }) => {
  const dispatch = useAppDispatch();
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const onModalClose = () => {
    setIsActiveModal(!isActiveModal)
    setName('')
    setDescription('')
    setPrice('')
  }

  const addProduct = (productToAdd: Product) => dispatch(productsActions.add(productToAdd));

  const createProduct = () => {
    const newProduct = {
      image: 'https://bulma.io/images/placeholders/128x128.png',
      name: name,
      description: description,
      price: +price,
    }

    addProduct(newProduct);
  }

  return (
    <div className={classNames('modal', {'is-active': isActiveModal})}>
          <div className="modal-background"></div>
          <div className="modal-content is-clipped">
            <form>
              <InputField inputValue={name} setInputValue={setName} />
              <InputField inputValue={description} setInputValue={setDescription} />
              <InputField inputValue={price} setInputValue={setPrice} />
              <div className="buttons">
              <button 
                className="button"
                onClick={onModalClose}
              >
                Cancel
              </button>
              <button 
                className="button is-primary"
                onClick={() => {
                  createProduct()
                  onModalClose()
                }}
              >
                Add Product
              </button>
              </div>
            </form>
          </div>
        </div>
  )
}