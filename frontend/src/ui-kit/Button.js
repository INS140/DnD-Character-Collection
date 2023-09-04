export default function Button(props) {
  const { children, className, onClick, ...rest } = props

  const classes = `btn text-light ${className ? className : ''}`

  return <button className={classes} onClick={onClick} {...rest}>{ children }</button>
}