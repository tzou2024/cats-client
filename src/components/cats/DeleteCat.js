import { deleteCat } from '../../api/cats'

const DeleteCat = (catId) => {
  console.log("ran here")

  deleteCat(catId)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  // return (
  //   navigate('/')
  // )
}

export default DeleteCat
