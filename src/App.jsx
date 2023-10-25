import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/items`)
      .then(res => setItems(res.data))
      .catch(err => setError(err.message))
  }, [])

  console.log({
    items,
    error
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <h1 style={{ margin: "auto" }}>MERCADO ITEMS</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map(item => (
          <div style={{ width: '25%', border: "solid 1px black" }}>
            <h1>{item.title}</h1>
            <img src={item.photo} style={{ maxWidth: '100%' }} />
            <p>{item.description}</p>
            <h3>{item.price} TND</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
