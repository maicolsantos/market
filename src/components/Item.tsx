import { useEffect, useState } from 'react'

type Props = {
  id: string;
  title: string;
  price: string;
  category: string;
  quantity: number;
}

type ItemProps = {
  item: Props,
  itemCallback: (item: any) => void;
  removeItem: (id: string) => void;
}

export const Item = ({ item, itemCallback, removeItem }: ItemProps) => {
  const [count, setCount] = useState(item.quantity || 1)
  const [isChecked, setIsChecked] = useState(false)

  const handleDecrement = () => setCount(state => state - 1)
  const handleIncrement = () => setCount(state => state + 1)
  const handleChange = () => setIsChecked(state => !state)

  useEffect(() => {
    itemCallback({ count, isChecked })
  }, [count])

  return (
    <div className="box mb-2 is-flex is-align-items-center is-justify-content-space-between">
      <label className="checkbox is-flex is-align-items-center">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <div>
          <span className="pl-2">{ item.title }</span>
          <span className="is-block pl-2 is-size-7 has-text-danger">{item.price}</span>
          <span className="tag is-link is-light is-rounded">{item.category}</span>
        </div>
      </label>
      <div>
        <div className="is-flex is-align-items-center">
          <div className="field has-addons">
            <div className="control">
              <button onClick={handleDecrement} className="button is-primary is-small">-</button>
            </div>
            <p className="control">
              <input value={count} readOnly className="input is-small has-text-centered" type="text" style={{ width: 36 }} />
            </p>
            <p className="control">
              <button onClick={handleIncrement} className="button is-primary is-small">+</button>
            </p>
          </div>
        </div>
        <button onClick={() => removeItem(item.id)} className="button is-danger is-small mt-3">Remover</button>
      </div>
    </div>
  )
}
