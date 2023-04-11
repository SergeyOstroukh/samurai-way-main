import React from "react";
import {type} from "os";

type TehnologiesPropsType = {
    titleValue: string
}
const Tehnologies = (props: TehnologiesPropsType) => {
    return (
        <div>
       <TehnologiesTitle title ={props.titleValue} />
        <TehnologiesBody />
        </div>
    )

}

type TehnoloiesTitlePropsType = {
    title: string
}
const TehnologiesTitle = (props: TehnoloiesTitlePropsType) => {
    return <h3>{props.title}</h3>
}


const TehnologiesBody = () =>{
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}
export default Tehnologies;