import { useState } from "react";
import Floating from "./Floating";




const ModalFloating = () => {
    const [isFloating, setIsFloating] = useState(false)
    const floatingAni = () => {
        setIsFloating(!isFloating)
        setTimeout(() => {

            setIsFloating(!isFloating)
        }, 2500);

    }

    return (
        <>
            <button style={{ height: `900px` }} onClick={() => floatingAni()}>floating modal</button>

            {isFloating ? <Floating /> : null}
        </>

    )

}
export default ModalFloating