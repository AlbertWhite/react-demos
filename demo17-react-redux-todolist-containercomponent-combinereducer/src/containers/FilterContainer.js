import React from 'react'
import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { changeFilterAction } from '../actions/actions'


const mapDispatchToProps = (dispatch) => {
	return{
		changeFilter: (filter) => {dispatch(changeFilterAction(filter))}
	}
}

const FilterContainer = connect(null, mapDispatchToProps)(Filter)

export default FilterContainer