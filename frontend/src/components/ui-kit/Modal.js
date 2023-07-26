import Button from "./Button"

export default function Modal(props) {
  const {
    children,
    className,
    header,
    closeModalText,
    onCancelClick,
    onCloseClick,
    disableSubmit,
    modalId
  } = props

  return <div className="modal fade" id={`${modalId}`} tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog center">
      <div className="modal-content primary">
        <div className="modal-header secondary">
          <h1 className="modal-title fs-5" id="exampleModalLabel">{header}</h1>
          <Button className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={onCancelClick}></Button>
        </div>
        <div className={`modal-body ${className}`}>
          {children}
        </div>
        <div className="modal-footer secondary">
          <Button
            className="tertiary"
            data-bs-dismiss="modal"
            onClick={onCloseClick}
            disabled={disableSubmit}
          >
            {closeModalText}
          </Button>
        </div>
      </div>
    </div>
  </div>
}