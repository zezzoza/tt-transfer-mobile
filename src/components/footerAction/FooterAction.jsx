import "./footerAction.scss"

const FooterAction = () => {
  return (
    <div className="footer">
      <div className="footer-highlight">Выделить</div>
      <div className="footer-delete">Удалить</div>
      <div className="footer-select-all">Выбрать всё</div>
      <div className="footer-to-archive">В архив</div>
    </div>
  )
}

export default FooterAction