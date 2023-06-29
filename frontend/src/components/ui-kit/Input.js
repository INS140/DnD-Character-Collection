export default function Input(props) {
  const { label, labelClass, className, type, value, onChange, required, ...rest } = props

  const labelClasses = `label ${labelClass}`

  const classes = `input ${className}`

  const inputType = type ? type : 'text'

  return <label className={labelClasses}>
    {label}
    {required && <span className='required'> * </span>}
    <input
      type={inputType}
      className={classes}
      required={required}
      value={value}
      onChange={onChange}
      {...rest}
    />
  </label>
}