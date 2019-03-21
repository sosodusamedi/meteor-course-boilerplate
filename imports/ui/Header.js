import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button onClick={() => Accounts.logout()} className="button button--link-text">
          Logout
        </button>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
