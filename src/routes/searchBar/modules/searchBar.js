import axios from 'axios'
// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const SHOW_COUNTRIES = 'SHOW_COUNTRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function searchCountries (searchTerm) {
  return {
    type    : SEARCH_COUNTRIES,
    searchTerm : searchTerm
  }
}

export function showCountries (countriesArray) {
  return {
    type    : SHOW_COUNTRIES,
    countries: countriesArray
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const findCountries = (toSearch) => {
  return (dispatch, getState) => {
    dispatch(searchCountries(toSearch))
    return axios.get(' https://restcountries.eu/rest/v1/name/' + toSearch)
    .then(function (response) {
      // console.log(response)
      dispatch(showCountries(response.data))
      alert(response.data.map((country) => country.name).toString())
    })
    .catch(function (error) {
      alert('No Countries Found')
      if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else {
      // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  }
}

export const actions = {
  searchCountries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_COUNTRIES] : (state, action) => {
    return {
      ...state,
      toSearch: action.searchTerm,
      countriesFound : [],
      searching : true
    }
  },
  [SHOW_COUNTRIES] : (state, action) => {
    // console.log(action.countries)
    // console.log(state)
    return {
      ...state,
      toSearch: '',
      countriesFound : action.countries,
      searching : false
    }
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0,
  countriesFound : [],
  searching: false
}
export default function searchBarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
