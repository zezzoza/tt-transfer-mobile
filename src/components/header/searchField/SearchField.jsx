import "./searchField.scss"
import searchIcon from "../../../assets/icons8-поиск.svg"
import iconTWhite from "../../../assets/Т.svg"
import iconTGreen from "../../../assets/T-1.svg"
import iconTransfer from "../../../assets/Трансфер.svg"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const SearchField = () => {

  const [isVisibleSearch, setVisibleSearch] = useState(false)
  const handleVisibilitySearch = () => setVisibleSearch(!isVisibleSearch)

  return (
    <div className="search-wrapper">
      <div className="iconLogo-wrapper">
        <div className="iconLogo-TT-conteiner">
          <img src={iconTWhite} className="iconLogo-T-white" alt="" srcset="" />
          <img src={iconTGreen} className="iconLogo-T-green" alt="" srcset="" />
        </div>
        
        <AnimatePresence>
          {
            // document.documentElement.clientWidth
            !isVisibleSearch && (
              <motion.div
                transition={{ duration: 0.2 }}
              >
                <div className="iconLogo-Transfer-conteiner">
                  <img src={iconTransfer} className="iconLogo-Transfer" alt="" />
                </div>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {
          isVisibleSearch && (
            <motion.div
              transition={{ duration: 0.2 }}
            >
              <div className="search-input-conteiner">
                <input className="search-input" type="text" />
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>

      <div className="search-icon-conteiner"
        onClick={handleVisibilitySearch}>
        <img className="search-icon" src={searchIcon} alt="" />
      </div>
    </div>
  )
}

export default SearchField