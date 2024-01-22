import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import iText from '../../assets/default';
import style from "./text.module.css"

function Text(){
    const [cText, setItext] = useState(iText);
    return(
        <div className={style.text}>
            <textarea 
            className={style.prev}
            name="editor"
            id="editor"
            value={cText}
            onChange={(e) => setItext(e.target.value)}>
            </textarea>
            <div className={style.after} id="preview">
            <ReactMarkdown>{cText}</ReactMarkdown>
            </div>
        </div>
    )

}


export default Text;