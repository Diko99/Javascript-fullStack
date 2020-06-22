import React from 'react'
import propTypes from 'prop-types'

const InlineErrors = ({ text }) => <span style={{ color: '#ae5856', fontSize: 12 }}>{text}</span>

InlineErrors.propTypes = ({
  text: propTypes.string
})

export default InlineErrors
