import { QRCodeSVG } from "qrcode.react"
import { SCAN_DATA } from "../constants"

export default () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    return (
        data.map((value, index) => {
            return (
                <div key={index}>{index+1}: {value} <QRCodeSVG value={value} /></div>
            )
        })
    )
}