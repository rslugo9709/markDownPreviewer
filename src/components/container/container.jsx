import { useState } from 'react';
import Text from '../text/text';
import style from "./container.module.css";
function Container(){

    return(
        <div className={style.bod}>
            <h1 className={style.title}>Welcome to my Markdown previewer!</h1>
            <h2 className={style.subtitle}>Made by: Raul Lugo</h2>
            <Text />
        </div>
    )

}


export default Container