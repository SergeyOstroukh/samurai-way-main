import React from "react";

const Tehnologies = (props: any) => {
    return (
        <div>
       <TehnologiesTitle />
        <TehnologiesBody />
        </div>
    )

}
const TehnologiesTitle = () => {
    return <h3>Меню</h3>
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