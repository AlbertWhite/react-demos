export const itemHasError = (hasError) => ({
	type: 'ITEM_HAS_ERROR',
	hasError
})

export const itemIsLoading = (isLoading) => ({
	type: 'ITEM_IS_LOADING',
	isLoading
})

export const itemFetched = (items) => ({
	type: 'ITEM_FETCHED',
	items
})

/*
the action to fetch data:
which return an function with dispatch as input parameter
and dispatch other actions based on the result fetched
*/
export const fetchItem = (url) => (
	(dispatch) => {

		dispatch(itemIsLoading(true))

		fetch(url)
			.then((response)=>{
				dispatch(itemIsLoading(false))
				return response
			})
			.then((response)=> response.json())
			.then((response)=> dispatch(itemFetched(response)))
			.catch(()=> dispatch(itemHasError(true)))
	}
)