import Card from 'react-bootstrap/Card';

const BrandCard= () => {
  return (
    <Card className='shadow-lg bg-secondary text-center ' style={{ fontFamily: "didot",fontSize : '5rem',color:'white',marginTop : '4.3rem',marginBottom:'4.5rem',}}>
      <Card.Body className='me-5'>The Generics</Card.Body>
    </Card>
  );
}

export default BrandCard;