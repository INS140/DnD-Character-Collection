import Button from "./Button"

export default function Dropdown(props) {
  const {className, children} = props

  const classes = `dropdown ${className ? className : ''}`
  
  return <div className={classes}>
    <Button
      className="dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      &bull; &bull; &bull;
    </Button>
    <div className="dropdown-menu">
      {children}
    </div>
  </div>
}