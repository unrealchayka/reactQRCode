import { Link } from "react-router-dom"
import s from "../style/navigation.module.css"

export default () => {
    return(
        <nav className={s.nav}>
            <Link to='/generator'>Генерировать QRCode</Link>
            <Link to='/scan'>Сканировать QRCode</Link>
            <Link to='/historyScan'>История сканирования QRCode</Link>
            <Link to='/historyGenerate'>История генерирования QRCode</Link>
        </nav>
    )
}