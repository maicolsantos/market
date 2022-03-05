import { v4 as uuidv4 } from 'uuid'

import { useEffect, useState } from 'react'
import { AddItem } from './components/AddItem'
import { Item } from './components/Item'

type ProductProps = {
  id: string;
  title: string;
  price: string;
  category: string;
  quantity: number;
}

export const App = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const getProducts = localStorage.getItem('@Market/products')

  const handleRemoveItem = (id: string) => {
    const newProducts = products.filter(product => product.id !== id)

    setProducts(newProducts)
    localStorage.setItem('@Market/products', JSON.stringify(newProducts))
  }

  const handleSubmit = (item: Omit<ProductProps, 'id'>) => {
    const data = [{
      ...item,
      id: uuidv4(),
      title: item.title,
      category: item.category,
      price: new Intl.NumberFormat('pt', {
        style: 'currency',
        currency: 'EUR'
      }).format(Number(item.price)),
    }]

    if (!getProducts) {
      setProducts(data)
      localStorage.setItem('@Market/products', JSON.stringify(data))

      return
    }

    const newProducts = [
      ...JSON.parse(getProducts),
      ...data
    ]

    setProducts(newProducts)

    return localStorage.setItem('@Market/products', JSON.stringify(newProducts))
  }

  useEffect(() => {
    if (getProducts) {
      setProducts(JSON.parse(getProducts || '[]'))
    }
  }, [getProducts])

  return (
    <div className="container is-max-desktop p-5">
      <h1 className="title is-3">Market</h1>
      <AddItem onSubmit={handleSubmit} />
      {
        products.map(product => (
          <Item
            key={product.id}
            item={product}
            itemCallback={() => {}}
            removeItem={handleRemoveItem}
          />
        ))
      }
    </div>
  )
}
