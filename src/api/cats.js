import apiUrl from '../apiConfig'
import axios from 'axios'

export const getCats = (credentials) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cats'
	})
}

export const getOneCat = (id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cats/' + id
	})
}

export const createCat = (newCat) => {
	return axios({
		url: apiUrl + '/cats',
		method: 'POST',
		data: {
			cat: {
				...newCat
			}
		},
	})
}

export const deleteCat = (id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/cats/' + id
	})
}

export const editCat = (id, newCat) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/cats/' + id,
		data: {
			cat: {
				...newCat
			}
		}
	})
}