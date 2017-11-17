import React from 'react'
import Input from '../components/Input'
import { connect } from 'react-redux'
import { findRepo } from '../action'

const mapStatusToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		findRepo: (user) => {
			dispatch(findRepo(user))
		}
	}
}

const InputContainer = connect(mapStatusToProps, mapDispatchToProps)(Input)

export default InputContainer