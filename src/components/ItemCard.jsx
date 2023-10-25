import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Avatar from './Avatar';

function ItemCard({item}) {
  return (
    <Card>
      <Card.Img variant='top' className='card-img' src={item.photo} />
      <Card.Body>
        <Card.Title className='text-truncate'>{item.title}</Card.Title>
        <Card.Text className='text-truncate'>{item.description}</Card.Text>
        <Badge pill bg='primary'>{item.price} TND</Badge>
      </Card.Body>
      <Avatar user={item.user} />
    </Card>
  )
}

export default ItemCard