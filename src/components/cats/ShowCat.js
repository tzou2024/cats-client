import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../shared/Loading'
import { getOneCat } from '../../api/cats'
import messages from '../shared/AutoDismissAlert/messages'
import { Container, Card } from 'react-bootstrap'
import DeleteCat from './DeleteCat'
import Button from '../shared/Button'

const ShowCat = (props) => {
    const {msgAlert} = props
    const [cat, setCat] = useState(null)
    //similar to express req.params
    const { id } = useParams()
    //console.log(id)
    const navigate = useNavigate()
    //usenavigate returns a function

    useEffect(() => {
        getOneCat(id)
            .then(res => setCat(res.data.cat))
            .catch(err => {
                navigate('/')
                msgAlert({
                    heading: 'Error getting cat',
                    message: messages.getPetsFailure,
                    variant: "danger"
                })
            })
    },[])

    if(!cat) {
        return <Loading />
    }
    return (
        <Container style={{textAlign: 'center'}}className = 'fluid'>
        <Card>
            <Card.Header>
                {cat.name}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                <div>
                <small>
                        Age: {cat.age}
                    </small>
                </div>
                <div>
                <small>
                        Adoptable: {cat.adoptable ? "yes" : "no"}
                    </small> 
                </div> 
                    
                </Card.Text>
                <Button text={'Edit ' + cat.name} onClick={() => navigate(`/cats/${cat._id}/edit`)}/>

                <Button text={'Delete ' + cat.name} onClick={() => {DeleteCat(cat._id); navigate('/')}}/>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default ShowCat
