export default function TextArea(props) {
    const { label, className, value, onChange, required, ...rest } = props
  
    const classes = `textarea ${className ? className : ''}`
  
    return <label className='label'>
      {label}
      <textarea
        className={classes}
        required={required}
        value={value}
        onChange={onChange}
        {...rest}
      ></textarea>
    </label>
  }
