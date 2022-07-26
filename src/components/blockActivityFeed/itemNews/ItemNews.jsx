import "./itemNews.scss"
import photo1 from "../../../assets/transfer 1.png"
import photo2 from "../../../assets/transfer 2.png"

const ItemNews = () => {
  return (
    <div className="item-news-wrapper">
      <div className="news-title-conteiner">
        <p className="news-title">Добро пожаловать в CRM систему ТТ Трансфер</p>
        <p className="date-of-dispatch">Вячеслав терехов  02.04.2021</p>
      </div>

      <div className="news-conteiner">
        <p className="news-main">Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть разоблачены. Социально-экономическое развитие позволяет выполнить важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач!
        Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть разоблачены. Социально-экономическое развитие позволяет выполнить важные задания по разработке позиций.
        </p>
        <div className="news-disclose">Расскрыть весь текст</div>

        <div className="news-photo-conteiner">
          <div className="news-photo">
            <img src={photo1} alt="" />
          </div>
          <div className="news-photo">
            <img src={photo2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemNews