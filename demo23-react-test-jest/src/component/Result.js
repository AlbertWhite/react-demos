import React from 'react'
import { connect } from 'react-redux'

var Result = ({result}) => {
	return(
		<div>
			{result}
		</div>
	)
}

const mapStateToProps = (state) =>{
	return{
		result: state.result
	}
}

Result = connect(mapStateToProps)(Result)

export default Result