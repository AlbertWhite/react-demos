import React from 'react';

const Link = ({changeFilter, filter, currentFilter}) => {
	
	let linkElement = null //necessary to set to null when define
	if(currentFilter === filter){
		linkElement = <a href="#" onClick={()=>changeFilter(filter)} className="active">{filter}</a> 
	}else{
		linkElement = <a href="#" onClick={()=>changeFilter(filter)}>{filter}</a>
	}

	return(
		<div>{ linkElement }</div>
	) 
		
}

export default Link