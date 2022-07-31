import { 
    Form,
    Button, 
} from 'react-bootstrap'
import React, {useState, useRef,useEffect} from 'react'

const PetForm = (props) => {
    const { cat, handleChange, handleCheck, handleSubmit } = props
    // console.log(handleChange)

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
                required
                type='String'
                name='name'
                value={cat.name}
                placeholder='Enter name'
                onChange={handleChange}
            />
        </Form.Group>
        <Form.Group controlId='age'>
            <Form.Label>Age</Form.Label>
            <Form.Control
                required
                type='Number'
                name='age'
                value={cat.age}
                placeholder='Enter age'
                onChange={ handleChange }
            />
        </Form.Group>
        <Form.Group controlId='adoptable'>
            <Form.Check
                label="Is this pet adoptable?"
                name="adoptable"
                defaultChecked={ cat.adoptable  }
                onChange={ handleCheck }
            />
        </Form.Group>

        <Button variant='primary' type='submit'>
            Submit
        </Button>

    </Form>
    )
}

export default PetForm