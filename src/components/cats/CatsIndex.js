import React, {useState, useEffect} from 'react'
import {getCats}  from '../../api/cats'
import Loading from '../shared/Loading'
import Card from 'react-bootstrap/Card';
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const CatsIndex = () => {
  const [cats, setCats] = useState(null)  
  useEffect(() => {
    getCats()
        .then(res => {
            setCats(res.data.cats)
        })
        .catch(err=> console.error)
  },[])

  if(!cats){
    return <Loading />
  }
  else if (cats.length === 0) {
      return (
          <div>
              <h3>No Cats! Better Add Some</h3>
          </div>
      )
  }
    const catCards = cats.map(cat => (
        
    <Card key={ cat._id } style={{ width: '30%', margin: 5}} >
        <Card.Body>
            <Card.Title>{cat.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Age: {cat.age}</Card.Subtitle>
            <Card.Subtitle>
            {cat.adoptable ? 'adoptable' : 'not adoptable'}
            </Card.Subtitle>
            
            <Card.Link href={`/cats/${cat._id}`}>View {cat.name} </Card.Link>

        </Card.Body>
        </Card>
        
    ))
    return (
        <div style={ cardContainerStyle }>
            {catCards}
        </div>
    )
  }

export default CatsIndex
