import axios from 'axios'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './components/ItemCard';

function App() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/items`)
      .then(res => setItems(res.data))
      .catch(err => setError(err.message))
  }, [])

  return (
    <Container>
      <h1 className='text-center'>MERCADO ITEMS</h1>
      <Row>
        {items.map((item, i) => (
          <Col sm={6} md={4} lg={3} key={i} className='mb-4'>
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App
