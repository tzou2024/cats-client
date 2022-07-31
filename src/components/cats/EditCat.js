import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CatForm from '../shared/CatForm'
import { getOneCat, editCat } from '../../api/cats'

const EditCat = () => {
    const navigate = useNavigate()
    const params = useParams()
    const catId = params.id
    // console.log(catId)
    const [cat, setCat] = useState({
        name: "",
        age: "",
        adoptable: false
    })
    useEffect(() => {
        getOneCat(catId)
            .then(res => {
                // console.log(res.data.cat)
                const currcat = {...res.data.cat}
                const fitleredCat = {
                    name: currcat.name,
                    age: currcat.age,
                    adoptable: currcat.adoptable
                }
                // console.log(fitleredCat)
                setCat({...fitleredCat})
            })
            .catch(err=>console.log(err))
    }, [])

    const handleChange = (e) => {
        // console.log(isChecked)
        setCat(prev => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedPet = {
                [updatedName]:parseInt(updatedValue) || updatedValue
            }
            // console.log(updatedPet)
            return {
                ...prev,
                ...updatedPet
            }
        })
    }

    const handleCheck = (e) => {
        console.log(e.target.isChecked)
            setCat((prev) => {
                return {
                    ...prev,
                    adoptable: e.target.checked
                }

            })
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(catId, cat)
        editCat(catId, cat)
            .then(res => {
                // console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
    <div>
    <h1>Edit {cat.name}</h1>
        <CatForm cat={cat} handleChange={handleChange} handleCheck={handleCheck} handleSubmit={handleSubmit}/>
    </div>
    )
}

export default EditCat
