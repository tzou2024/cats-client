import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import CatForm from '../shared/CatForm'
import { createCat } from '../../api/cats'

const CreateCat = () => {
    const navigate = useNavigate()
    const [cat, setCat] = useState({
        name: "",
        age: "",
        adoptable: false
    })
    // useEffect(() => {
    //     console.log(cat)
    // }, [cat])
    const handleChange = (e) => {
        // console.log(isChecked)
        setCat(prev => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedPet = {
                [updatedName]:parseInt(updatedValue) || updatedValue
            }
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
        // console.log("submitted: ",cat)
        createCat(cat)
            .then(res=>{
                // console.log(res, "SUCCESS")
                navigate('/')
            })
            .catch(err=>console.log(err))
    }


    return (
    <div>
        <CatForm cat={cat} handleChange={handleChange} handleCheck={handleCheck} handleSubmit={handleSubmit}/>
    </div>
    )
}

export default CreateCat
