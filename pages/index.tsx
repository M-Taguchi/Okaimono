
import {useState} from "react";

const Index = () => {
    const [hoge, sethoge] = useState<string>("初期値");
    const [send, setSend] = useState<string[]>([]);
    return (
        <div>
            <p>欲しいもの：<input type="text" id="target" onChange={
                event => {
                    sethoge(event.target.value);
                }
            }/>
                <button onClick={
                    event => {
                        setSend([...send, hoge])
                        change_value("target")
                    }
                }>
                    入力
                </button>
                <TextView text={send}/>
            </p>

        </div>
    )
};

const TextView = (prop: { text: string[] }) => {
    return (
    <div>
        {prop.text.map((e) => {
            return <li>{e}</li>
        })}
    </div>
    )
}


const change_value = (id:string) =>{
    let obj = document.getElementById(id) as HTMLInputElement;

    obj.value = "";
}

export default Index;