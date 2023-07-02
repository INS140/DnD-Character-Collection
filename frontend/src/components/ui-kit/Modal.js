import Button from "./Button"

export default function Modal(props) {
  const { children, openModalText, closeModalText, modalId } = props

  return <div>
    <Button type="button" className="btn primary m-2" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
      {openModalText}
    </Button>
    <div className="modal fade" id={`${modalId}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Signup</h1>
            <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <Button type="button" className="btn tertiary" data-bs-dismiss="modal">Cancel</Button>
            <Button type="button" className="btn primary">
              {closeModalText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
}