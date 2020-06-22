import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import propTypes from 'prop-types'
import Validator from 'validator'
import InlineErrors from '../messages/InlineErrors'

class LoginForm extends Component {
  state = {
    loading: false,
    errors: {},
    data: {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
    }
  }

  validate = (data) => {
    const errors = {}
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email! '
    if (!data.password) errors.password = "Cant't be blank"
    return errors
  }

  render () {
    const { data, errors } = this.state
    const { onChange, onSubmit } = this
    return (
      <Form onSubmit={onSubmit}>
        <Form.Field error={errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@gmail.com'
            value={data.email}
            onChange={onChange}
          />
          {errors.email && <InlineErrors text={errors.email} />}
        </Form.Field>
        <Form.Field error={errors.password}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={data.password}
            onChange={onChange}
          />
          {errors.password && <InlineErrors text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    )
  }
}

LoginForm.propTypes = ({
  submit: propTypes.func
})

export default LoginForm
