import React from 'react'
import User from '../components/User'
import { connect } from 'react-redux'

const mapStatusToProps = (state) => {
	return{
		repos: state
	}
}

const UserContainer = connect(mapStatusToProps)(User)

export default UserContainer