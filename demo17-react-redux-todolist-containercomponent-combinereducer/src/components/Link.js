import React from 'react';

const Link = ({changeFilter, filter}) => {
	return (
		<div>
			<a href="#" onClick={()=>changeFilter(filter)}>{filter}</a> 
		</div>
	)
}

export default Link