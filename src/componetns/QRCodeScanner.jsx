import { Scanner } from "@yudiel/react-qr-scanner"
import { useState } from "react"
import s from "../style/QRCodeScanner.module.css"
import { SCAN_DATA } from "../constants"

export default () =>{
    const [scanned, setScanned] = useState(null)


    const scanHandler = (result)=>{
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue]))
    }

    const setting = {
        audio: false,
        finder: false,
    }

    const stylesSettings = {
        container: {
            width: 350,
            transform: 'scale(-1, 1)'
        }
    }

     return(
        <div className={s.container}>
            {scanned && <p className={s.result}>QR текст: {scanned}</p>}
            <div className={s.scanner}>
            <Scanner 
                onScan={scanHandler}
                components={setting}
                styles={stylesSettings}
                />
            </div>
        </div>
     )
}