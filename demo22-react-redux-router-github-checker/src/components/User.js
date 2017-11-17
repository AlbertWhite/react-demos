import React from 'react'

const User = ({repos}) => {
	return <div>
		{
			repos.map((repo, index)=>{
				return <div key={index}>{repo.name}</div>
			})			
		}	
	</div>
}

export default User