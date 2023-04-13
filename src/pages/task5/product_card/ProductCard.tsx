import { useAppDispatch } from "../../../hooks/ReduxApp";
import { Product } from "../../../types/Product"
import { actions as productsActions } from '../../../features/products';
import classNames from "classnames";

type Props = {
  product: Product;
  pinned: string;
  setPinned: (value: string) => void
}

export const ProductCard: React.FC<Props> = ({ product, pinned, setPinned }) => {
  const dispatch = useAppDispatch();
  const { name, description, price, image } = product;
  const isPinned = name === pinned;

  const removeProduct = (productToRemove: string) => dispatch(productsActions.take(productToRemove));

  const onPin = (value: string) => {
    if (value === pinned) {
      return setPinned('')
    }

    return setPinned(value)
  };

  return (
    <div
      key={name} 
      className="column is-half-tablet is-one-third-desktop"
    >
      <div
        className="box is-flex is-flex-direction-column is-align-items-center is-relative"
      >
        <button
          type="button"
          style={{ position: 'absolute', top: '5px', left: '5px' }}
          className={classNames('button is-small', {
            'is-success': !isPinned,
            'is-warning': isPinned
          })}
          onClick={() => {
           onPin(name)
          }}
        >
          {isPinned ? <i className="fa-solid fa-thumbtack" /> : 'Pin'}
        </button>
        <button
          type="button"
          style={{ position: 'absolute', top: '5px', right: '5px' }}
          className="button is-small is-danger"
          onClick={() => {
           removeProduct(name)
          }}
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <figure className="image is-128x128 mb-2">
          <img src={image} alt="N/A" />
        </figure>
        <h1 className="title has-text-centered">{name}</h1>
        <p className="has-text-centered mb-4">{description}</p>
        <div className="tag is-link is-size-4">{price} USD</div>
      </div>
    </div>
  )
}