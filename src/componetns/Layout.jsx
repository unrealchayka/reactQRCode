import { Routes, Route } from "react-router-dom";
import QRCodeScanner from "./QRCodeScanner";
import GenerateHistory from "./GenerateHistory";
import ScanHistory from "./ScanHistory";
import QRCodeGenerator from "./QRCodeGenerator";
import Navigation from "./Navigation";



export default () => {
    return (
        <>
        <Navigation/>

        <Routes>
            <Route path="/generator" element={<QRCodeGenerator />} />
            <Route path="/scan" element={<QRCodeScanner />} />
            <Route path="/historyScan" element={<ScanHistory />} />
            <Route path="/historyGenerate" element={<GenerateHistory />} />
        </Routes>
        </>
    )

}