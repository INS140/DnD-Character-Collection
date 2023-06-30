export default function Select(props) {
  const { label, children, className, onChange, ...rest } = props

  const classes = `select ${className}`

  return <label className='label'>
    {label}
    {required && <span className='required'> * </span>}
    <select
      className={classes}
      onChange={onChange}
      {...rest}
    >
      {children}
    </select>
  </label>
}