export default function Button(props) {
  const { children, className, onClick, ...rest } = props

  const classes = `button ${className}`

  return <button className={classes} onClick={onClick} {...rest}>{ children }</button>
}