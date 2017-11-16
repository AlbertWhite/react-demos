import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { changeFilterAction } from '../actions/actions'

const mapStateToProps = (state) => {
	return {
		currentFilter: state.filter
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		changeFilter: (filter) => {dispatch(changeFilterAction(filter))}
	}
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer