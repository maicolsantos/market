import { useState } from 'react'
import { categories } from '../categories'

type ProductProps = {
  title: string;
  price: string;
  category: string;
  quantity: number;
}

type AddItemProps = {
  onSubmit: (item: ProductProps) => void
}

export const AddItem = ({ onSubmit }: AddItemProps) => {
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = () => {
    const data = {
      title: product,
      price,
      category,
      quantity: 1,
    }

    onSubmit(data)
  }


  return (
    <div className="box">
      <div className="field">
        <label className="label is-small">Produto</label>
        <div className="control">
          <input className="input" type="text" value={product} onChange={e => setProduct(e.target.value)} />
        </div>
      </div>
      <div className="is-flex">
        <div className="field pr-3">
          <label className="label is-small">Preço ex:(12.34)</label>
          <div className="control">
            <input className="input" type="text" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label is-small">Categorias</label>
          <div className="control">
            <div className="select">
              <select onChange={e => setCategory(e.target.value)}>
              <option>Selecione</option>
                {
                  categories.map(category => (
                    <option key={category}>{category}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button is-primary"
            disabled={!product || !price || !category}
            onClick={handleSubmit}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}
