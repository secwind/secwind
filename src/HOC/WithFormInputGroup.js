import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const WithFormInputGroup = ({
    lable,
    name,
    type,
    value,
    onChange,
    ref,
    placehoder,
    autoComplete,
    error
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{lable}</label>
        <input
          type={type}
          name={name} 
          className={classnames('form-control form-control-gl', {'is-invalid' : error})}
          placeholder={placehoder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          ref={ref}
        /> 
        <div className="invalid-feedback">{error}</div>            
    </div>
  )
}

WithFormInputGroup.defalutProps = {
    type: 'text',
}

WithFormInputGroup.propsTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    autoComplete: PropTypes.string.isRequired,
    ref: PropTypes.func.isRequired,

}

export default WithFormInputGroup;