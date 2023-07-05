import Button from "./Button"

export default function Modal(props) {
  const { children, header, openModalText, onOpenClick, closeModalText, onCloseClick, disableSubmit, modalId } = props

  return <div>
    <Button
      className="btn secondary m-2 text-light"
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
      onClick={onOpenClick}
    >
      {openModalText}
    </Button>
    <div className="modal fade" id={`${modalId}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog center">
        <div className="modal-content primary">
          <div className="modal-header secondary">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{header}</h1>
            <Button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer secondary">
            <Button
              className="btn tertiary"
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
  </div>
}