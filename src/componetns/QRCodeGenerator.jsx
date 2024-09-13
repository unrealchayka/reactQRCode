import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from'../style/QRCodeGenerator.module.css'
import { GENERATE_DATA } from "../constants";


export default () => {
    const [qrState, setQrState] = useState('')
    const [isShowQRCode, setIsShowQRCode] = useState('')

    const onClickHandler = () => {
        setIsShowQRCode(qrState)
        setQrState('')
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, qrState]))    
    }

    const onChangekHandler = (e) => {
        setQrState(e.target.value)
        setIsShowQRCode('')
    }


    console.log(isShowQRCode)

    return (
        <div className={s.container}>
            <input className={s.input} type="text" placeholder="Введите текст.." value={qrState} onChange={onChangekHandler} />
            <button className={s.button} type="button" onClick={onClickHandler}>Сгенерировать QRCode</button>
            {isShowQRCode !== '' && (<div className={s.qrWrapper}>
                <QRCodeSVG value={isShowQRCode}/>
            </div>)}
        </div>
    )
}