import React from 'react';

const Link = ({changeFilter, filter, currentFilter}) => {
		
	if(currentFilter == filter){
		return (
			<div>
				<a href="#" onClick={()=>changeFilter(filter)} className="active">{filter}</a> 
			</div>
		)
	}

	return (
			<div>
				<a href="#" onClick={()=>changeFilter(filter)}>{filter}</a> 
			</div>
	)
	
}

export default Link