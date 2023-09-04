export default function Input(props) {
  const { label, labelClass, className, type, value, onChange, required, ...rest } = props

  const labelClasses = `label ${labelClass}`

  const classes = `input ${className ? className : ''}`

  const inputType = type ? type : 'text'

  return <label className={labelClasses}>
    {label}
    <input
      type={inputType}
      className={classes}
      required={required}
      value={value}
      onChange={onChange}
      {...rest}
    />
    { type === "checkbox" && <span className="checkbox"></span> }
  </label>
}