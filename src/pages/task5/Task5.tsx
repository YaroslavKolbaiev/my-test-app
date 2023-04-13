import { useAppSelector } from "../../hooks/ReduxApp"
import { useState } from "react";
import '../../myStyles/mystyles.scss'
import { TaskDescription } from "./task_description/TaskDescription";
import { Modal } from "./modal/Modal";
import { ProductCard } from "./product_card/ProductCard";
import { Header } from "./header/Header";


export const Task5 = () => {
  const { products } = useAppSelector(state => state.products);

  const [isActiveModal, setIsActiveModal] = useState(false)
  const [query, setQuery] = useState('');
  const [pinned, setPinned] = useState('');

  const isPinnedProduct = products.find(product => product.name === pinned)

  const visibleProducts = products.filter(product =>
    (product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    || product.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    && product.name !== isPinnedProduct?.name
  );

  return (
    <div className="section">
      <div className="container">
        <TaskDescription />

        <Header
          isActiveModal={isActiveModal}
          setIsActiveModal={setIsActiveModal}
          query={query}
          setQuery={setQuery}
        />

        <div className="columns is-multiline">
          {isPinnedProduct && (
            <ProductCard 
              product={isPinnedProduct}
              pinned={pinned}
              setPinned={setPinned}
            />
          )}

          {visibleProducts.map(product => (
            <ProductCard 
              product={product}
              pinned={pinned}
              setPinned={setPinned}
            />
          ))}
        </div>

        <Modal 
          isActiveModal={isActiveModal} 
          setIsActiveModal={setIsActiveModal} 
        />
      </div>
    </div>
  )
}