import React from 'react'
import Link from './Link.js'

const Filter = ({changeFilter}) => {
	return(
		<div>
			<Link filter="all" changeFilter={changeFilter}></Link>
			<Link filter="todo" changeFilter={changeFilter}></Link>
			<Link filter="done" changeFilter={changeFilter}></Link>
		</div>
	)
}

export default Filter