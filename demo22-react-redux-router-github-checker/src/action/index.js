export const saveRepo = (repos) => (
	{
		type: 'SAVE_REPO',
		repos
	}
)

export const findRepo = (user) => {
	
	const url = `https://api.github.com/users/${user}/repos`
	return (dispatch) => {
		fetch(url)
			.then((response) => {return response.json()})
			.then((response)=> {return dispatch(saveRepo(response))})
	}
}


