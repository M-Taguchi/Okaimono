import index_controller from "../component/new_index"
import {FC, useState} from "react";
import {Observer} from "mobx-react-lite";
import new_index from "../component/new_index";

const controller = new index_controller();

const Index = () => {
    //const [hoge, sethoge] = useState<string>("初期値");
    //const [send, setSend] = useState<string[]>([]);
    return (
        <div>
            <p>欲しいもの：
                <Observer>{() =>
                    <input type="text" id="target" onChange={
                        event => {
                            controller.change_current_text(event.target.value)
                        }}
                           value={controller.currentText}
                    />
                }</Observer>

                <Observer>{() =>
                    <button onClick={
                        controller.add_item
                    }
                            disabled={!controller.isAddable}
                    >
                        入力
                    </button>
                }</Observer>

                <TextView controller={controller}/>
            </p>

        </div>
    )
};

const TextView:FC<{ controller:new_index }> = prop=> {
    return (

        <Observer>{() =>
            <div>
                {prop.controller.items.map((e,i) => {
                    return <li>{e} <button onClick={()=>{prop.controller.deleteItemwithIndex(i)}}>けす</button></li>
                })}
            </div>
        }</Observer>

    )
}

/*
const change_value = (id: string) => {
    let obj = document.getElementById(id) as HTMLInputElement;

    obj.value = "";
}
*/
export default Index;