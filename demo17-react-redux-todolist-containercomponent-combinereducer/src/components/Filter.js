import React from 'react'
import Link from './Link.js'

const Filter = ({currentFilter, changeFilter}) => {
	return(
		<div>
			<Link filter="all" changeFilter={changeFilter} currentFilter={currentFilter}></Link>
			<Link filter="todo" changeFilter={changeFilter} currentFilter={currentFilter}></Link>
			<Link filter="done" changeFilter={changeFilter} currentFilter={currentFilter}></Link>
		</div>
	)
}

export default Filter