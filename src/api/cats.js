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